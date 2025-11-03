const knex = require("../database/knex");
const AppError = require("../utils/AppErrors");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(req, res) {
    const { title, description, category, price, ingredients } = req.body;
    const user_id = req.user.id;

    const diskStorage = new DiskStorage();
    
    const filename = req.file ? await diskStorage.saveFile(req.file.filename) : null;

    const [dish_id] = await knex("recipes").insert({
      title,
      description,
      category,
      price,
      image: filename,
      user_id
    });

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id,
        name,
        user_id
      }
    });

    await knex("ingredients").insert(ingredientsInsert);

    return res.json();
  }

  async update(req, res) {
    const { title, description, category, price, ingredients } = req.body;
    const { id } = req.params;
    const user_id = req.user.id;

    const dish = await knex("recipes").where({ id }).first();
    
    if (!dish) {
      throw new AppError("Prato não encontrado");
    }

    const diskStorage = new DiskStorage();
    
    let filename = dish.image;
    
    if (req.file) {
      if (dish.image) {
        await diskStorage.deleteFile(dish.image);
      }
      
      filename = await diskStorage.saveFile(req.file.filename);
    }

    await knex("recipes").where({ id }).update({
      title,
      description,
      category,
      price,
      image: filename,
      updated_at: knex.fn.now()
    });

    await knex("ingredients").where({ dish_id: id }).delete();

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id: id,
        name,
        user_id
      }
    });

    await knex("ingredients").insert(ingredientsInsert);

    return res.json();
  }

  async show(req, res) {
    const { id } = req.params;

    const dish = await knex("recipes").where({ id }).first();
    
    if (!dish) {
      throw new AppError("Prato não encontrado");
    }

    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name");

    return res.json({
      ...dish,
      ingredients
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const dish = await knex("recipes").where({ id }).first();
    
    if (!dish) {
      throw new AppError("Prato não encontrado");
    }

    const diskStorage = new DiskStorage();
    
    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    await knex("recipes").where({ id }).delete();

    return res.json();
  }

  async index(req, res) {
    const { title, ingredients } = req.query;

    let dishes;

    if (ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());
      
      dishes = await knex("ingredients")
        .select([
          "recipes.id",
          "recipes.title",
          "recipes.description",
          "recipes.category",
          "recipes.price",
          "recipes.image",
        ])
        .whereLike("recipes.title", `%${title}%`)
        .whereIn("ingredients.name", filterIngredients)
        .innerJoin("recipes", "recipes.id", "ingredients.dish_id")
        .groupBy("recipes.id")
        .orderBy("recipes.title");
    } else {
      dishes = await knex("recipes")
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const dishesWithIngredients = await Promise.all(dishes.map(async dish => {
      const dishIngredients = await knex("ingredients")
        .where({ dish_id: dish.id })
        .orderBy("name");

      return {
        ...dish,
        ingredients: dishIngredients
      };
    }));

    return res.json(dishesWithIngredients);
  }
}

module.exports = DishesController;