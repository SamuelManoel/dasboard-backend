const moment = require('moment');
const Faturados = require('../models/Faturados');
const { sequelize } = require('../../database/index');

class MillenniumController {
  async faturados(req, res) {
    const faturados = await Faturados.create(req.body);
    return res.json(faturados);
  }

  async listFaturados(req, res) {
    const faturados = await Faturados.findAll();
    return res.json(faturados);
  }

  async ontem(req, res) {
    const mes =
      moment().month() + 1 > 9
        ? moment().month() + 1
        : `0${moment().month() + 1}`;

    const dia = moment().date() - 1 < 10 ? `0${moment().date() - 1}` : moment().date() - 1

    const hora = moment().hour() > 9
      ? moment().hour()
      : `0${moment().hour()}`;

    const date = `${moment().year()}-${mes}-${dia}T${hora}%`;


    const faturados = await sequelize.query(
      `SELECT * FROM mil_faturados where updates Like '${date}' `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return res.json(faturados);
  }

  async umaSemana(req, res) {
    const mes =
      moment().month() + 1 > 9
        ? moment().month() + 1
        : `0${moment().month() + 1}`;


    const dia = moment().date() - 7 < 10 ? `0${moment().date() - 7}` : moment().date() - 7

    const hora = moment().hour() > 9
      ? moment().hour()
      : `0${moment().hour()}`;

    const date = `${moment().year()}-${mes}-${dia}T${hora}%`;

    const faturados = await sequelize.query(
      `SELECT * FROM mil_faturados where updates Like '${date}' `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return res.json(faturados);
  }

  async totalOntem(req, res) {
    const mes =
      moment().month() + 1 > 9
        ? moment().month() + 1
        : `0${moment().month() + 1}`;

    const dia = moment().date() - 1 < 10 ? `0${moment().date() - 1}` : moment().date() - 1


    const date = `${moment().year()}-${mes}-${dia}T23:50%`;

    const faturados = await sequelize.query(
      `SELECT * FROM mil_faturados where updates Like '${date}' `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return res.json(faturados);
  }

  async totalSemana(req, res) {
    const mes =
      moment().month() + 1 > 9
        ? moment().month() + 1
        : `0${moment().month() + 1}`;

    const dia = moment().date() - 7 < 10 ? `0${moment().date() - 7}` : moment().date() - 7



    const date = `${moment().year()}-${mes}-${dia}T23:50%`;

    const faturados = await sequelize.query(
      `SELECT * FROM mil_faturados where updates Like '${date}' `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return res.json(faturados);
  }
}
module.exports = new MillenniumController();
