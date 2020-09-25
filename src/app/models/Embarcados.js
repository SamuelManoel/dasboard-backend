const { Model, Sequelize } = require('sequelize');

class embarcados extends Model {
  static init(sequelize) {
    super.init(
      {
        embarcados: Sequelize.STRING,
        updates: Sequelize.STRING,
      },
      {
        sequelize,
        underscored: true,
      }
    );

    return this;
  }
}
module.exports = embarcados;
