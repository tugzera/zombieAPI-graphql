"use strict";

const dateNow = require("../../utils/index");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArmorsSchema extends Schema {
  up() {
    this.create("armors", table => {
      table.string("name");
      table.integer("defense_points").nullable();
      table.integer("durability");
      table.integer("price");
      table.increments();
      table.timestamp("created_at");
      table.timestamp("updated_at");
      table.timestamp("server_created_at");
      table.timestamp('server_updated_at');
    });
  }

  down() {
    this.drop("armors");
  }
}

module.exports = ArmorsSchema;
