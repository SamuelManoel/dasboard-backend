const Embarcados = require('../models/Embarcados');

class MillenniumController {
  async embarcados(req, res) {
    const faturados = await Embarcados.create(req.body);
    return res.json(faturados);
  }

  async listembarcados(req, res) {
    const faturados = await Embarcados.findAll();
    return res.json(faturados);
  }
}
module.exports = new MillenniumController();
