const { Model, Sequelize } = require('sequelize');

class embarcados_agora extends Model {
  static init(sequelize) {
    super.init(
      {
        embarcados_agora: Sequelize.STRING,
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
module.exports = embarcados_agora;
