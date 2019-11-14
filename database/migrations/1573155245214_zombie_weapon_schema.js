"use strict";

const dateNow = require("../../utils/index");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ZombieWeaponSchema extends Schema {
  up() {
    this.create("zombie_weapons", table => {
      table.increments();
      table
        .integer("zombie_id")
        .unsigned()
        .references("id")
        .inTable("zombies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("weapon_id")
        .unsigned()
        .references("id")
        .inTable("weapons")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamp("created_at");
        table.timestamp("updated_at");
        table.timestamp("server_created_at");
        table.timestamp('server_updated_at');
    });
  }

  down() {
    this.drop("zombie_weapons");
  }
}

module.exports = ZombieWeaponSchema;
