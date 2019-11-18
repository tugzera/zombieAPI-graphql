"use strict";

const Armor = use("App/Models/Armor");

module.exports = {
  Query: {
    armors: async () => {
      const list = await Armor.all();
      return list.toJSON();
    },
    armor: async (_, { id }) => {
      const item = await Armor.findOrFail(id);
      return item.toJSON();
    }
  },
  Mutation: {
    storeArmor: async (_, { data }) => {
      const item = await Armor.create(data);
      return item;
    },
    updateArmor: async (_, { id, data }) => {
      const item = await Armor.findOrFail(id);
      item.merge(data);
      await item.save();
      return item;
    },
    destroyArmor: async (_, { id }) => {
      const item = await Armor.findOrFail(id);
      await item.delete();
    }
  }
};
