const AgPagamento = require('../models/AgPagamento');

module.exports = function(io){
class MillenniumController {
  async AgPagamento(req, res) {
    const ag_pagamento = await AgPagamento.update(req.body, {
      where: { id: 1 },
    });
    io.emit('receivedMessage', 'Ag Pagamento Atualizado');

    return res.json(ag_pagamento);
  }

  async listAgPagamento(req, res) {
    const ag_pagamento = await AgPagamento.findAll();
    return res.json(ag_pagamento);
  }
}
return  new MillenniumController();
}