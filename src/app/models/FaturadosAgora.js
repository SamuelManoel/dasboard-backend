const { Model, Sequelize } = require('sequelize');

class faturados_agora extends Model {
  static init(sequelize) {
    super.init(
      {
        faturados_agora: Sequelize.STRING,
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
module.exports = faturados_agora;
