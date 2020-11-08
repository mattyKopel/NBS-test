 const Distance = sequelize.define('Distance', {

    // attributes
    sourceLatLong: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
    destLatLong: {
        type: Sequelize.STRING,
        allowNull: false
      },

      distance: {
        type: Sequelize.FLOAT
      },

      num: {
        type: Sequelize.INTEGER
      }
        
    });

Distance.sync({ force: false });

module.exports = Distance;