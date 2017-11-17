module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("user", {
		email: {
    		type:DataTypes.STRING,
    		allowNull:false,
    		unique:true,
    		validate:{
    			isEmail: true
    		}
    	},
    	password:{
    		type:DataTypes.STRING,
    		allowNull:false,
    		validate:{
    			min: [8]
    		}
    	},
    	firstName: {
    		type:DataTypes.STRING,
    		/*allowNull:false,*/
    		validate:{
    			isAlpha: true,
    			notEmpty: true
    		}
    	},
    	lastName: {
    		type:DataTypes.STRING,
    		/*allowNull:false,*/
    		validate:{
    			isAlpha: true,
    			notEmpty: true
    		}
    	},
    	isAdmin: {
    		type:DataTypes.BOOLEAN,
    		defaultValue:false
    	}
	});
	return User;
};