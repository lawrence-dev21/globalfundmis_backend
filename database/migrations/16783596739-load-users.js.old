"use strict";
async function up(knex) {
  try {

    const admin = {
      name: 'SA',
      description: 'Super Admin role to login',
      type: 'sa',
      createdAt: Date.now(),
      updatedAt: Date.now() ,
    }
    const adminPerms = [3,4,5,6,7,8,9]
    const [adminId] = await knex('up_roles').insert(admin)
    const upPermissionsRoleLinks = adminPerms.map((adminPerm, index) => {
      return {
        permission_id: adminPerm,
        role_id: adminId,
        permission_order: index + 1
      }
    })
    for(const perm of upPermissionsRoleLinks){
      await knex('up_permissions_role_links').insert(perm)
    }
    
  } catch (error) {
    throw error;
  }
}

module.exports = { up };
