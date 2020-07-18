const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {
  console.log(req.body);
       
  const { email, password } = req.body;
  try {
    //see if user exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({
        errors: [{ msg: 'User already exist' }]
      });
    }    

    admin = new Admin({ email, password });

    //password encryption
    const salt = await bcryptjs.genSalt(10);
    admin.password = await bcryptjs.hash(password, salt);
    await admin.save();

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
    return;
  }
});

module.exports = router;
