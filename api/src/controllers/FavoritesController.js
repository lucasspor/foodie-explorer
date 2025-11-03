const knex = require("../database/knex");
const AppError = require("../utils/AppErrors");

class FavoritesController {
  async create(req, res) {
    const { dish_id } = req.body;
    const user_id = req.user.id;

    const checkFavorite = await knex("favorites")
      .where({ user_id, dish_id })
      .first();

    if (checkFavorite) {
      throw new AppError("Este prato já está nos favoritos");
    }

    await knex("favorites").insert({
      user_id,
      dish_id
    });

    return res.json();
  }

  async delete(req, res) {
    const { id } = req.params;
    const user_id = req.user.id;

    const favorite = await knex("favorites")
      .where({ 
        dish_id: id,
        user_id
      })
      .first();
    
    if (!favorite) {
      throw new AppError("Favorito não encontrado");
    }

    await knex("favorites")
      .where({ 
        dish_id: id,
        user_id
      })
      .delete();

    return res.json();
  }

  async index(req, res) {
    const user_id = req.user.id;

    const favorites = await knex("favorites")
      .select([
        "recipes.id",
        "recipes.title",
        "recipes.description",
        "recipes.price",
        "recipes.image"
      ])
      .where({ "favorites.user_id": user_id })
      .innerJoin("recipes", "recipes.id", "favorites.dish_id")
      .orderBy("recipes.title");

    return res.json(favorites);
  }
}

module.exports = FavoritesController;