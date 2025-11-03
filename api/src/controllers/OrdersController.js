const knex = require("../database/knex");
const AppError = require("../utils/AppErrors");

class OrdersController {
  async create(req, res) {
    const { cart, status } = req.body;
    const user_id = req.user.id;

    const [order_id] = await knex("orders").insert({
      status,
      user_id
    });

    const itemsInsert = cart.map(item => {
      return {
        order_id,
        dish_id: item.id,
        quantity: item.quantity
      }
    });

    await knex("ordersItems").insert(itemsInsert);

    return res.json({ id: order_id });
  }

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    await knex("orders").where({ id }).update({ status });

    return res.json();
  }

  async show(req, res) {
    const { id } = req.params;

    const order = await knex("orders").where({ id }).first();
    
    if (!order) {
      throw new AppError("Pedido não encontrado");
    }

    const items = await knex("ordersItems")
      .where({ order_id: id })
      .select([
        "recipes.id",
        "recipes.title",
        "recipes.price",
        "recipes.image",
        "ordersItems.quantity"
      ])
      .innerJoin("recipes", "recipes.id", "ordersItems.dish_id");

    return res.json({
      ...order,
      items
    });
  }

  async index(req, res) {
    const user_id = req.user.id;
    const isAdmin = req.user.isAdmin;

    let orders;

    if (isAdmin) {
      orders = await knex("orders")
        .select([
          "orders.id",
          "orders.status",
          "orders.created_at",
          "users.name as user_name"
        ])
        .innerJoin("users", "users.id", "orders.user_id")
        .orderBy("orders.created_at", "desc");
    } else {
      orders = await knex("orders")
        .where({ user_id })
        .orderBy("created_at", "desc");
    }

    const ordersWithItems = await Promise.all(orders.map(async order => {
      const items = await knex("ordersItems")
        .where({ order_id: order.id })
        .select([
          "recipes.id",
          "recipes.title",
          "recipes.price",
          "recipes.image",
          "ordersItems.quantity"
        ])
        .innerJoin("recipes", "recipes.id", "ordersItems.dish_id");

      return {
        ...order,
        items
      };
    }));

    return res.json(ordersWithItems);
  }
}

module.exports = OrdersController;