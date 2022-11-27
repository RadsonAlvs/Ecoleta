import Knex from 'knex';
type Knex = any

export async function up(knex: Knex) {
     return knex.schema.createTable('items', (table: any) => {
        table.increments('id').primary()
        table.string('image').notNullable();
        table.string('titulo').notNullable();
    });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('items');
}