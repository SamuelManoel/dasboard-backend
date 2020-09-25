const { Model, Sequelize } = require('sequelize');

class cart_abandoned extends Model {
  static init(sequelize) {
    super.init(
      {
        email_sent: Sequelize.STRING,
      },
      {
        sequelize,
        underscored: true,
      }
    );

    return this;
  }
}
module.exports = cart_abandoned;
