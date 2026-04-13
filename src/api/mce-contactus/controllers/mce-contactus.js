'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mce-contactus.mce-contactus', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        Addresses: {
          populate: {
            contactInfo: true
          }
        },
        otherSection: true,
        metaTags: true,
      }
    };
    return await super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        Addresses: {
          populate: {
            contactInfo: true
          }
        },
        otherSection: true,
        metaTags: true,
      }
    };
    return await super.findOne(ctx);
  }
}));
