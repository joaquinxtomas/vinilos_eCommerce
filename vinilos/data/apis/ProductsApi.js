const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const productList = {
    productList: async (req, res) => {
        try {
            var products = await db.Product.findAll({include:{all:true}});
            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: products.length,
                        url: 'http://localhost:3000/products'
                    },
                    data: {
                        products: products
                    }

                }
            )
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productList