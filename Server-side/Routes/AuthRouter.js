const { signup, login } = require('../Controllers/Authcontroller');
const { signupvalidation, loginvalidation } = require('../Middlewares/Authvalidation');


const router = require('express').Router();

router.post('/login',loginvalidation,login)
router.post('/Signup',signupvalidation,signup)

module.exports = router;