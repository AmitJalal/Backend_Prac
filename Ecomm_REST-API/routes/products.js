const router = require("express").Router();
const { getProducts, getProductsTesting } = require("../controllers/products");

router.get("/", getProducts);
router.get("/testing", getProductsTesting);

module.exports = router;
