'use strict';

/**
 * mce-popular-tab controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mce-popular-tab.mce-popular-tab', ({ strapi }) => ({
  async find(ctx) {
    // Clone the query to avoid modifying the original
    const query = { ...ctx.query };

    // If no populate is specified, populate cardData with banner
    if (!query.populate) {
      query.populate = {
        cardData: {
          populate: {
            banner: true
          }
        }
      };
    }

    // Create a new context with the modified query
    const newCtx = { ...ctx, query };

    // Call the default core controller with the modified query
    const { data, meta } = await super.find(newCtx);

    return { data, meta };
  },

  async findOne(ctx) {
    // Clone the query to avoid modifying the original
    const query = { ...ctx.query };

    // Ensure proper population of cardData including banner
    if (!query.populate) {
      query.populate = {
        cardData: {
          populate: {
            banner: true
          }
        }
      };
    }

    // Create a new context with the modified query
    const newCtx = { ...ctx, query };

    // Call the default core controller with the modified query
    const response = await super.findOne(newCtx);

    return response;
  }
}));
