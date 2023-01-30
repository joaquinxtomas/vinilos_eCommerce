module.exports = (sequelize,dataTypes) => {
    let alias= 'ProductCategory';
    let cols = {
        productCategory:{type:dataTypes.INTEGER},
    };
    let config = {
        tableName:'productscategory',
        timestamps:false,
        underscore:true
    };
    const ProductCategory = sequelize.define(alias,cols,config);
    //asociaciones

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoryId"
        })
    }
    return ProductCategory; 
}