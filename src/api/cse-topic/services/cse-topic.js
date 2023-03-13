'use strict';

/**
 * cse-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cse-topic.cse-topic');
