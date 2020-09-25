const { Model, Sequelize } = require('sequelize');

class meta_faturados extends Model {
  static init(sequelize) {
    super.init(
      {
        meta_faturados: Sequelize.STRING,
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
module.exports = meta_faturados;
