const {response} = require('express');

const User = require('../models/User.model');

const createUser = async(req, res = response) => {
  const {email, password} = req.body;

  try {
    let user = await User.findOne({email});

    console.log(user);

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese correo'
      });
    }

    user = new User(req.body);
    
    await user.save()
    
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const loginUser = (req, res = response) => {
  const {email, password} = req.body;

  res.status(201).json({
    ok: true,
    msg: 'login',
    email,
    password
  });
}

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  });
}

module.exports = {
  createUser,
  loginUser,
  renewToken
};