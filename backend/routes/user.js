const router = require('express').Router();
const { check, validationResult } = require('express-validator');
let User = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    const foundUser = await User.find();
    res.send(foundUser);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

//@route POST user/registration
//@desc register user
//@acces Public

router.post(
  '/registration',
  [
    check('username', 'must be at least 3 chars long').isLength({ min: 3 }),
    check(
      'password',
      'must be at least 5 chars long and must contain a number'
    ).isLength({ min: 5 }),
    check('email', 'incorrect e-mail').isEmail(),
    check('phone', 'inccorect mobile phone')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      const { username, password, email, phone } = req.body;
      const newUser = await new User({
        username,
        password,
        email,
        phone
      });
      const savedUser = await newUser.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  }
);

module.exports = router;
