"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Zombie extends Model {
  type() {
    return this.belongsTo("App/Models/Type");
  }

  weapon() {
    return this.belongsToMany("App/Models/Weapon").pivotTable("zombie_weapons");
  }

  armor() {
    return this.belongsToMany("App/Models/Armor").pivotTable("zombie_armors");
  }
}

module.exports = Zombie;
