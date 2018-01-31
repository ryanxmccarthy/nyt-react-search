const router = require("express").Router();
const articlesController = require("./articles");

// Book routes
router.use("/articles", articlesController);

module.exports = router;
