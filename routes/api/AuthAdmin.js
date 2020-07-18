const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Admin = require('../../models/admin');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const { check, validationResult } = require('express-validator/check');

router.get('/', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Passwaord is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //see if user exists
      let admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
      }
      const isMatch = await bcryptjs.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
      }

      const payload = {
        admin: {
          id: admin.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
