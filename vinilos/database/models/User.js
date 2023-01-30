module.exports = function(sequelize, dataTypes){
	
	let alias="User"  // apodo con el que se usará la tabla en el código

	let cols={
		id:{
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fullName:{
			type: dataTypes.STRING
		}, 
        email: {
            type: dataTypes.STRING
        }, 
        password: {
            type: dataTypes.INTEGER
        },
        categoryId: {
            type: dataTypes.INTEGER
        }
	};

	let config={
		timestamps: false,
		tablename: "users"
	}


	let User = sequelize.define(alias,cols,config);
	
    User.associate = function(models){
        User.belongsTo(models.UserCategory, {
            as: "userCategory",
            foreignKey: "categoryId"
        })
    }

	return User;
}