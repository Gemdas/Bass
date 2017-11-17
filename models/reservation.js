module.exports = function(sequelize, DataTypes) {
	var Reservation = sequelize.define("reservation",{
		time: {
    		type:DataTypes.STRING,
    		allowNull:false,
    	},
        weekday: {
            type:DataTypes.STRING,
            allowNull:false,
        },
    	firstPlayerName: {
    		type:DataTypes.STRING,
    		allowNull:false,
    		validate:{
    			notEmpty: true
    		}
    	},
        secondPlayerName: {
            type:DataTypes.STRING,
            validate:{
                notEmpty: true
            }
        },
        thirdPlayerName: {
            type:DataTypes.STRING,
            validate:{
                notEmpty: true
            }
        },
        fourthPlayerName: {
            type:DataTypes.STRING,
            validate:{
                notEmpty: true
            }
        },
    	isFull:{
    		type:DataTypes.BOOLEAN,
    		defaultValue:false,	
    	}
    }
    return Reservation;
}