'use strict';

/**
 * district controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::district.district', ({strapi}) => ({
    async getDistrictCount(ctx) {
          const result = await strapi.service('api::district.district').countDistrictsWithSchools();
          ctx.send({ count: result });
        },
}));