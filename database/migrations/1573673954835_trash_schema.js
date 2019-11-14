'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrashSchema extends Schema {
  up () {
    this.create('trashes', (table) => {
      table.increments()
      table.integer('id_deleted')
      table.string('column')
      table.timestamps()
      table.timestamp('deleted_at');
    })
  }

  down () {
    this.drop('trashes')
  }
}

module.exports = TrashSchema
