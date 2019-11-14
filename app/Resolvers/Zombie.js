"use strict";

const Zombie = use("App/Models/Zombie");

const zombie = new Zombie()

zombie.name = 'teste';

module.exports = {
  Query: {
    zombies: () => zombie

  }
};
