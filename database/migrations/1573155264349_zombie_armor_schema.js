"use strict";

const dateNow = require("../../utils/index");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ZombieArmorSchema extends Schema {
  up() {
    this.create("zombie_armors", table => {
      table.increments();
      table
        .integer("zombie_id")
        .unsigned()
        .references("id")
        .inTable("zombies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("armor_id")
        .unsigned()
        .references("id")
        .inTable("armors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamp("created_at");
        table.timestamp("updated_at");
        table.timestamp("server_created_at");
        table.timestamp('server_updated_at');
    });
  }

  down() {
    this.drop("zombie_armors");
  }
}

module.exports = ZombieArmorSchema;
