const { Model, Sequelize } = require('sequelize');

class mil_ag_embarque extends Model {
  static init(sequelize) {
    super.init(
      {
        ag_embarque: Sequelize.STRING,
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
module.exports = mil_ag_embarque;
