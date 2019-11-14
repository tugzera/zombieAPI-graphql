"use strict";

const Weapon = use("App/Models/Weapon");

module.exports = {
  Query: {
    weapons: async () => {
      const list = await Weapon.all();
      return list.toJSON();
    },
    weapon: async (_, { id }) => {
      const item = await Weapon.findOrFail(id);
      return item.toJSON();
    }
  },
  Mutation: {
    storeWeapon: async (_, { input }) => {
      const item = await Weapon.create(input);
      return item.toJson();
    },
    updateWeapon: async (_, { id, input }) => {
      const item = await Weapon.findOrFail(id);
      item.merge(data);
      await item.save();
      return item;
    }
  }
};
