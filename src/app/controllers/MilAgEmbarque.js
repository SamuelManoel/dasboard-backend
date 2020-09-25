const AgEmbarque = require('../models/AgEmbarque');
module.exports = function (io) {


  class MillenniumController {
    async agembarque(req, res) {
      const ag_embarque = await AgEmbarque.update(req.body, {
        where: { id: 1 },
      });
      io.emit('receivedMessage', 'Ag Embarque Atualizado')
      return res.json(ag_embarque);
    }

    async listAgembarque(req, res) {
      const ag_embarque = await AgEmbarque.findAll();
      return res.json(ag_embarque);
    }
  }
  return new MillenniumController();
}