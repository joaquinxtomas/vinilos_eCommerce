module.exports = (sequelize,dataTypes) => {
    let alias= 'Product';
    let cols = {
        name:{type:dataTypes.STRING},
        description:{type:dataTypes.STRING},
        price:{type:dataTypes.INTEGER},
        discount:{type:dataTypes.INTEGER},
        image:{type:dataTypes.STRING},
        categoryId:{type:dataTypes.INTEGER}
    };
    let config = {
        tableName:'products',
        timestamps:false,
        underscore:true
    };
    const Product = sequelize.define(alias,cols,config);
    //asociaciones
    Product.associate = function(models){
        Product.belongsTo(models.ProductCategory, {
            as: "productCategory",
            foreignKey: "categoryId"
        })
    }
    return Product; 
}