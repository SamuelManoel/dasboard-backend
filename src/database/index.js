const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const CartAbandoned = require('../app/models/CartAbandoned');
const AgFaturamento = require('../app/models/AgFaturamento');
const AgEmbarque = require('../app/models/AgEmbarque');
const AgAnalise = require('../app/models/AgAnalise');
const AgPagamento = require('../app/models/AgPagamento');
const Faturados = require('../app/models/Faturados');
const FaturadosAgora = require('../app/models/FaturadosAgora');
const MetaFaturados = require('../app/models/MetaFaturamento');

const Embarcados = require('../app/models/Embarcados');
const EmbarcadosAgora = require('../app/models/EmbarcadosAgora');

const models = [
  CartAbandoned,
  AgFaturamento,
  AgEmbarque,
  AgAnalise,
  AgPagamento,
  Faturados,
  Embarcados,
  EmbarcadosAgora,
  FaturadosAgora,
  MetaFaturados,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = {
  database: new Database(),
  sequelize: new Database().connection,
};
