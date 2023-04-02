'use strict';

/**
 * student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student.student', ({strapi}) => ({
    async createStudent(ctx) {
        const { firstName, lastName, gender, dateOfBirth } = ctx.request.body.data;
        // generate a random email and username
        const username = firstName + '.' + lastName +  Math.random().toString(36).substring(2, 15)
        const email = username + '@global.com'
        // we need to find the student role
        const studentRole = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: {
            name: 'Student'
          } 
         });
        const studentUser = await strapi.db.query('plugin::users-permissions.user').create({
            data: 
            {  email,
              username,
              password: "dummyPass",
              firstName,
              lastName,
              gender,
              dateOfBirth,
              role: {
                connect: [
                  {
                    id: studentRole.id
                  }
                ]
              },
              confirmed: false
            }
          });
          console.log(studentUser)
        const { parentUserExists, parentExists, parentAddress, parentFirstName, parentLastName, parentMobile, parentNRC } = ctx.request.body.data;
        const parentRole = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: {
            name: 'Parent'
          } 
         });

        console.log('Creating Parent user')
        let parentUser = await strapi.db.query('plugin::users-permissions.user').findOne({
          where: {
            nrc: parentNRC
          }})
          let parent = {}

        if(parentUser) {
          parent = await strapi.db.query('api::parent.parent').findOne({
              where: {
                user: parentUser.id
              } 
            });
        } else {
          parentUser = await strapi.db.query('plugin::users-permissions.user').create({
            data: { 
              username: parentFirstName + '.' + parentLastName +  Math.random().toString(36),
              email: parentFirstName + '.' + parentLastName +  Math.random().toString(36) + '@global.com',
              password: "dummyPass",
              firstName: parentFirstName,
              lastName: parentLastName,
              gender: "Male",
              nrc: parentNRC,
              role: {
                connect: [
                  {
                    id: parentRole.id
                  }
                ]
              },
              mobile: parentMobile,
              confirmed: false
            }
          })
          parent = await strapi.db.query('api::parent.parent').create({
            data:
            {
                  address: parentAddress,
                  user: parentUser.id,
                  createdAt: Date.now(),
                  updatetedAt: new Date(),
                  publishedAt: Date.now(),
                }
            })      
          }
      // Create a student in the student collection
        const { gradeId, schoolId } = ctx.request.body.data;
        ctx.request.body = {
          ...ctx.request.body,
          data: {
            user: studentUser.id,
            beneficiary: false,
            enrolledAt: "2015-02-02",
            parent: parent.id,
            grade: gradeId,
            school: schoolId }
        };
    
      
      // // 3
      const response = await super.create(ctx);
  
      // // 4
      return response;
    }
})
);
