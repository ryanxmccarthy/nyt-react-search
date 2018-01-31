const router = require("express").Router();
const articlesController = require("./books");

// Book routes
router.use("/articles", articlesController);

module.exports = router;
