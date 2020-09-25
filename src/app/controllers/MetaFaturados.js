const MetaFaturamento = require('../models/MetaFaturamento');


module.exports = function(io){
  class MillenniumController {
    async metaFaturados(req, res) {
      const metaFaturados = await MetaFaturamento.update(req.body, {
        where: { id: 1 },
      });
      io.emit('receivedMessage', 'Meta Atualizada');
      return res.json(metaFaturados);
    }
  
    async listmetaFaturados(req, res) {
      const metaFaturados = await MetaFaturamento.findAll();
      return res.json(metaFaturados);
    }
  } 
 return  new MillenniumController();
}
