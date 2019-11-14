"use strict";

const dateNow = require("../../utils/index");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WeaponsSchema extends Schema {
  up() {
    this.create("weapons", table => {
      table.increments();
      table.string("name");
      table.string("bullets");
      table.integer("attack_points").nullable();
      table.integer("durability");
      table.integer("price");
      table.timestamp("created_at");
      table.timestamp("updated_at");
      table.timestamp("server_created_at");
      table.timestamp('server_updated_at');
    });
  }

  down() {
    this.drop("weapons");
  }
}

module.exports = WeaponsSchema;
