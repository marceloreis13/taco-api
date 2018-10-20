const FoodController = require('../controllers/FoodController');

module.exports = app => {
  app.get('/food', (_, res) => res.json(FoodController.getFoodList()));

  app.get('/food/:foodId', (req, res) => {
    const { foodId } = req.params;

    if (isNaN(foodId)) {
      res.status(400).json({
        message: 'Food id is required',
      });
    }

    res.json(FoodController.getFoodById(foodId));
  });
  // app.get('/category/:categoryId/food', Food.getFoodByCategoryId);
};