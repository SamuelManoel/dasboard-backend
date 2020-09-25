/* eslint-disable no-shadow */
const CartAbandoned = require('../models/CartAbandoned');
// const { sequelize } = require('../../database/index');

class CartAbandonedClass {
  async store(req, res) {
    const sendmail = await CartAbandoned.create(req.body);

    return res.json(sendmail);
  }
}

module.exports = new CartAbandonedClass();
