module.exports = function(sequelize, DataTypes) {
	var Day = sequelize.define("day",{
		weekday: {
            type:DataTypes.STRING,
            allowNull:false,
        },
		openTime: {
    		type:DataTypes.STRING,
    		allowNull:false,
    	},
    	closeTime: {
    		type:DataTypes.STRING,
    		allowNull:false,
    	},
    	iteration: {
    		type:DataTypes.INTEGER,
    		allowNull:false,  
    		validate:{
    			isInt: true,
    			min: 1
    		}  		
    	},
    	isOpen:{
    		type:DataTypes.BOOLEAN,
    		defaultValue:true
    	}
    }, {
        timestamps: false
    })
    return Day;
}