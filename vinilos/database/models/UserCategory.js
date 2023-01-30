module.exports = function(sequelize, dataTypes){
	
	let alias="UserCategory"  // apodo con el que se usará la tabla en el código

	let cols={
		id:{
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		userCategory:{
			type: dataTypes.INTEGER
		}
	};

	let config={
		timestamps: false,
		tablename: "usersCategory"
	}


	let UserCategory = sequelize.define(alias,cols,config);
	
    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User, {
            as: "users",
            foreignKey: "categoryId"
        })
    }

	return UserCategory;
}