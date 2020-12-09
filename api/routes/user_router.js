const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

router.get('/a', (req, res, next) => { res.send("bvbdvbd")});
///login route
router.post('/login', (req, res, next) => {
    const token = jwt.sign(
        {
          email: req.email,
          pass: req.password
        },
        'secret',
        {
          expiresIn: '1h'
        }
      );
      return res.status(200).json({
        message: 'auth granted',
        token: token
      });
         
});




module.exports = router;
