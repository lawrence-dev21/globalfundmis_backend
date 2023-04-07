'use strict';

/**
 * district service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::district.district', ({ strapi }) => ({
    countDistrictsWithSchools: async () => {
        const allDistricts = await strapi.entityService.findMany('api::district.district', {
            populate: { schools: true }
        });
        const districtsWithSchools = allDistricts.filter(district => district.schools && district.schools.length > 0);
        return districtsWithSchools.length;
      },
    }));