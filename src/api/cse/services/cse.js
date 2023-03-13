'use strict';

/**
 * cse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cse.cse');
