var express = require('express');
var router = express.Router();
let productsApi = require('../data/apis/ProductsApi')

/* GET home page. */
router.get('/list', productsApi.productList);

module.exports = router;