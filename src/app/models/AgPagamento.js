const { Model, Sequelize } = require('sequelize');

class mil_ag_pagamento extends Model {
  static init(sequelize) {
    super.init(
      {
        ag_pagamento: Sequelize.STRING,
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
module.exports = mil_ag_pagamento;
