


module.exports = function(sequelize, DataTypes) {
  const BigMac = sequelize.define('BigMac', {
    burgerName: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return BigMac;
}
