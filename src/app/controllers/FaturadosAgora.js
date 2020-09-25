// const moment = require('moment');
const FaturadosAgora = require('../models/FaturadosAgora');
// const { sequelize } = require('../../database/index');
module.exports = function(io){
class MillenniumController {
  async faturadosAgora(req, res) {
    // atualiza os faturados de agora
    const faturadosUpdate = await FaturadosAgora.update(req.body, {
      where: { id: 1 },
    });
    io.emit('receivedMessage', 'Faturados Agora Atualizado')
    return res.json(faturadosUpdate);
  }

  async listFaturados(req, res) {
    const faturados = await FaturadosAgora.findAll();
    return res.json(faturados);
  }
}
return new MillenniumController()
}
 
