const axios = require('axios');

class CronJob {
  async request(req, res) {
    await axios.get('http://200.201.206.181:3001/millennium/faturados');
    return res.json({ Task: 'Running' });
  }
}
module.exports = new CronJob();
