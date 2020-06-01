const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;
  try {
    //see if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: 'User already exist' }]
      });
    }

    user = new User({ name, email, password });

    //password encryption
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id
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
