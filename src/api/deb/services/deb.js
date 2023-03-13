'use strict';

/**
 * deb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deb.deb');
