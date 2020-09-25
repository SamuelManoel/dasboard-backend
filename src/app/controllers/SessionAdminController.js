const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authAdmin');

class SessionAdminController {
  async generateAppKey(req, res) {
    const { email } = req.body;

    if (email !== 'owner@lojasantoantonio.com.br') {
      return res.status(401).json({ error: 'User not authorization' });
    }

    return res.json({
      token: jwt.sign({ email }, authConfig.secret, {}),
    });
  }
}
module.exports = new SessionAdminController();
