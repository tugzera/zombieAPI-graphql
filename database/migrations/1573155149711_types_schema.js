"use strict";

const dateNow = require("../../utils/index");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TypesSchema extends Schema {
  up() {
    this.create("types", table => {
      table.increments();
      table.string("name");
      table.string("abilities");
      table.timestamp("created_at");
      table.timestamp("updated_at");
      table.timestamp("server_created_at");
      table.timestamp('server_updated_at');
    });
  }

  down() {
    this.drop("types");
  }
}

module.exports = TypesSchema;
