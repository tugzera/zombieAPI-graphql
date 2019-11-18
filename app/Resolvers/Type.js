"use strict";

const Type = use("App/Models/Type");

module.exports = {
  Query: {
    types: async () => {
      const list = await Type.all();
      return list.toJSON();
    },
    type: async (_, { id }) => {
      const item = await Type.findOrFail(id);
      return item.toJSON();
    }
  },
  Mutation: {
    storeType: async (_, { data }) => {
      const item = await Type.create(data);
      return item;
    },
    updateType: async (_, { id, data }) => {
      const item = await Type.findOrFail(id);
      item.merge(data);
      await item.save();
      return item;
    },
    destroyType: async (_, { id }) => {
      const item = await Type.findOrFail(id);
      await item.delete();
    }
  }
};
