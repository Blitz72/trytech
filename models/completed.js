// define sequelise model for 'completed' database table 

module.exports = function (sequelize, DataTypes) {
    var Completed = sequelize.define("Completed", {
        completed_customer: {type: DataTypes.INTEGER, allowNull: false},
        completed_item: {type: DataTypes.INTEGER, allowNull: false},
        comleted_subscription: {type: DataTypes.INTEGER, allowNull: false},
        completed_dateout: {type: DataTypes.DATE, allowNull: false},
        completed_dateback: {type: DataTypes.DATE, allowNull: false},
        
    });

    return Completed;
};