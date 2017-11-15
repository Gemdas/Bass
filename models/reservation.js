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
    	groupName: {
    		type:DataTypes.STRING,
    		allowNull:false,
    		validate:{
    			notEmpty: true
    		}
    	},
    	playerCount:{
    		type:DataTypes.TINYINT,
    		defaultValue:1,
    		validate:{
    			isInt: true,
    			max: 4,
    			min: 1
    		}	
    	}
    }
    Reservation.associate=function(models){
   		Reservation.belongsTo(models.user, {
   			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
   			}
   		})
    }
    return Reservation;
}