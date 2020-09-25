const { Router } = require('express');

const CartAbandoned = require('./app/controllers/CartAbandoned');
const SessionAdminController = require('./app/controllers/SessionAdminController');
const MilAgFaturamento = require('./app/controllers/MilAgFaturamento');
const MilAgEmbarque = require('./app/controllers/MilAgEmbarque');
const MilAgAnalise = require('./app/controllers/MilAgAnalise');
const MilAgPagamento = require('./app/controllers/MilAgPagamento');
const MilFaturados = require('./app/controllers/MilFaturados');
const FaturadosAgora = require('./app/controllers/FaturadosAgora');
const Embarcados = require('./app/controllers/Embarcados');
const EmbarcadosAgora = require('./app/controllers/EmbarcadosAgora');
const MetaFaturados = require('./app/controllers/MetaFaturados');

const CronJob = require('./app/controllers/CronJob');

const middlewareAdmin = require('./app/middlewares/authAdmin');



module.exports = function(io){

const routes = new Router();


routes.post('/appkey', SessionAdminController.generateAppKey);
routes.put('/millennium/update-ag-faturamento', MilAgFaturamento(io).agFaturamento);
routes.put('/millennium/update-ag-embarque', MilAgEmbarque(io).agembarque);
routes.put('/millennium/update-ag-analise', MilAgAnalise(io).aganalise);
routes.put('/millennium/update-ag-pagamento', MilAgPagamento(io).AgPagamento);
routes.put('/millennium/update-faturados', FaturadosAgora(io).faturadosAgora);
routes.post('/millennium/create-embarcados', Embarcados.embarcados);
routes.put('/millennium/embarcados_agora', EmbarcadosAgora(io).embarcados);
routes.put('/millennium/meta', MetaFaturados(io).metaFaturados);

routes.get('/millennium/meta', MetaFaturados(io).listmetaFaturados);

routes.post('/millennium/create-faturados', MilFaturados.faturados);

routes.get('/millennium/cronjobs', CronJob.request);

routes.get('/millennium/faturados_ontem', MilFaturados.ontem);
routes.get('/millennium/faturados_semana', MilFaturados.umaSemana);
routes.get('/millennium/faturados_total_ontem', MilFaturados.totalOntem);
routes.get('/millennium/faturados_total_semana', MilFaturados.totalSemana);

routes.use(middlewareAdmin);
// APP KEY
routes.post('/sendmail/cart-abandoned', CartAbandoned.store);
routes.get('/millennium/ag-faturamento', MilAgFaturamento(io).listAgFaturamento);
routes.get('/millennium/ag-embarque', MilAgEmbarque(io).listAgembarque);
routes.get('/millennium/ag-analise', MilAgAnalise(io).listAganalise);
routes.get('/millennium/ag-pagamento', MilAgPagamento(io).listAgPagamento);

routes.get('/millennium/faturados', MilFaturados.listFaturados);

routes.get('/millennium/embarcados', Embarcados.listembarcados);
routes.get('/millennium/embarcados_agora', EmbarcadosAgora(io).listembarcados);

routes.get('/millennium/faturados-agora', FaturadosAgora(io).listFaturados);

    return routes
};
