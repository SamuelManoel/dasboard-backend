const { Model, Sequelize } = require('sequelize');

class mil_faturados extends Model {
  static init(sequelize) {
    super.init(
      {
        faturados: Sequelize.STRING,
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
module.exports = mil_faturados;
