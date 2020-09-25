const AgFaturamento = require('../models/AgFaturamento');

module.exports = function(io){


class MillenniumController {
  async agFaturamento(req, res) {
    const ag_faturamento = await AgFaturamento.update(req.body, {
      where: { id: 1 },
    });
    io.emit('receivedMessage', 'Ag Faturamento Atualizado')
    return res.json(ag_faturamento);
  }

  async listAgFaturamento(req, res) {
    const ag_faturamento = await AgFaturamento.findAll();
    return res.json(ag_faturamento);
  }
}
return new MillenniumController();
}

