const express = require('express');
const cors = require('cors');
const http = require('http');

const socketIO = require('socket.io');



require('./database');

const app = express();

app.use(express.json());
app.use(cors());


/* eslint-disable no-console */

const server = http.createServer(app);

const io = socketIO(server);
const routes = require('./routes')(io);
app.use(routes);
const MetaFaturados = require('./app/controllers/MetaFaturados');

// production
// app.listen(3001, () => {
//   console.log('Server Running in port 21231');
// });
// local

io.on('connection', (socket) => {
  console.log(socket.id);
  
  socket.emit('receivedMessage', 'MetaFaturados.listAgFaturamento');
});

server.listen(21002, () => {
  console.log('Server Running in port 21002');
});

// class App {
//   constructor() {
//     this.server = express();

//     this.middlewares();
//     this.routes();
//   }

//   middlewares() {
//     this.server.use(express.json());
//     this.server.use(cors());
//   }

//   routes() {
//     this.server.use(routes)(io);
//   }
// }

// module.exports = new App().server;
