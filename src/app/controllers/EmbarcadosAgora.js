const EmbarcadosAgora = require('../models/EmbarcadosAgora');

module.exports = function (io) {
  class MillenniumController {
    async embarcados(req, res) {
      const faturados = await EmbarcadosAgora.update(req.body, {
        where: { id: 1 },
      });
      io.emit('receivedMessage', 'Embarcados agora Atualizado')
      return res.json(faturados);
    }

    async listembarcados(req, res) {
      const faturados = await EmbarcadosAgora.findAll();
      return res.json(faturados);
    }
  }
  return new MillenniumController()
}

