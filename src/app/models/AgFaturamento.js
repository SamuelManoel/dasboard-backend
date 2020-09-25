const { Model, Sequelize } = require('sequelize');

class mil_ag_faturamento extends Model {
  static init(sequelize) {
    super.init(
      {
        ag_faturamento: Sequelize.STRING,
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
module.exports = mil_ag_faturamento;
