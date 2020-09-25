const AgAnalise = require('../models/AgAnalise');

module.exports = function(io){

class MillenniumController {
  async aganalise(req, res) {
    const ag_analise = await AgAnalise.update(req.body, {
      where: { id: 1 },
    });
    io.emit('receivedMessage', 'Ag analise Atualizado')
    return res.json(ag_analise);
  }

  async listAganalise(req, res) {
    const ag_analise = await AgAnalise.findAll();
    return res.json(ag_analise);
  }
}
return  new MillenniumController();
}
