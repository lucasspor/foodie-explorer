exports.up = async knex => {
  const hasColumn = await knex.schema.hasColumn("orders", "status");
  if (!hasColumn) {
    await knex.schema.alterTable("orders", table => {
      table.text("status");
    });
  }
}

exports.down = async knex => {
  const hasColumn = await knex.schema.hasColumn("orders", "status");
  if (hasColumn) {
    await knex.schema.alterTable("orders", table => {
      table.dropColumn("status");
    });
  }
}