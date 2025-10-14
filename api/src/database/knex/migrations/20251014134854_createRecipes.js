exports.up = knex => knex.schema.createTable("recipes", table => {

})


exports.down = knex => knex.schema.dropTable("recipes")
