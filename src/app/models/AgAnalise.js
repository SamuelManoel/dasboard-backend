const { Model, Sequelize } = require('sequelize');

class mil_ag_analise extends Model {
  static init(sequelize) {
    super.init(
      {
        ag_analise: Sequelize.STRING,
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
module.exports = mil_ag_analise;
