'use strict';

/**
 * mce-faqs-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::mce-faqs-list.mce-faqs-list',
  ({ strapi }) => ({

    async find(ctx) {
      const { populate, slug } = ctx.query;

      const queryOptions = {
        select: ['id', 'documentId', 'Header', 'Slug', 'Description', 'locale', 'seoSchema'],
        populate: { Banner: true, MetaTags: true },
        orderBy: { updatedAt: 'desc' },
      };

      if (populate === '*') queryOptions.populate = { ...queryOptions.populate, Details: true };

      if (slug) {
        // Filter by slug
        const page = await strapi.db.query('api::mce-faqs-list.mce-faqs-list').findOne({
          where: { Slug: slug },
          ...queryOptions,
        });

        if (!page) return ctx.notFound('No page found for this slug');

        delete page.createdBy;
        delete page.updatedBy;

        return { data: page };
      } else {
        // Return all pages
        let data = await strapi.db.query('api::mce-faqs-list.mce-faqs-list').findMany(queryOptions);

        // Deduplicate by documentId
        const uniqueMap = new Map();
        for (const item of data) {
          const existing = uniqueMap.get(item.documentId);
          if (!existing || new Date(item.updatedAt) > new Date(existing.updatedAt)) {
            delete item.createdBy;
            delete item.updatedBy;
            uniqueMap.set(item.documentId, item);
          }
        }

        return { data: Array.from(uniqueMap.values()) };
      }
    },

  }));
