exports.up = async knex => {
  const exists = await knex.schema.hasTable("ordersItems");
  if (exists) {
    await knex.schema.dropTable("ordersItems");
  }

  await knex.schema.createTable("ordersItems", table => {
    table.increments("id");
    table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("recipes").onDelete("CASCADE");
    table.text("title");
    table.integer("quantity");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

exports.down = async knex => {
  const exists = await knex.schema.hasTable("ordersItems");
  if (exists) {
    await knex.schema.dropTable("ordersItems");
  }
}