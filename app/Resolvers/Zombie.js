"use strict";

const Zombie = use("App/Models/Zombie");

module.exports = {
  Query: {
    zombies: async () => {
      const list = await Zombie.query()
        .with("type")
        .with("weapon")
        .fetch();
      return list.toJSON();
    },
    zombie: async (_, { id }) => {
      const item = await Zombie.query()
        .where("id", id)
        .with("type")
        .with("weapon")
        .fetch();
      return item.toJSON()[0];
    }
  },
  Mutation: {
    storeZombie: async (_, { data }) => {
      const item = await Zombie.create(data);
      return item;
    },
    updateZombie: async (_, { id, data }) => {
      const item = await Zombie.findOrFail(id);
      item.merge(data);
      await item.save();
      return item;
    },
    destroyZombie: async (_, { id }) => {
      const item = await Zombie.findOrFail(id);
      await item.delete();
    },
    addWeapon: async (_, { id_zombie, id_armor }) => {
      const item = await Zombie.findOrFail(id_zombie);
      await item.weapon().attach(id_armor);
      return item;
    }
  }
};
