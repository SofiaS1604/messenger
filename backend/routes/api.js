const {Router} = require('express');
const router = Router();
const path = require('path');
const multipart = require('connect-multiparty');
const multipartyMiddleware = multipart();

const usersController = require('../controllers/UsersController');

router.post('/api/signup', multipartyMiddleware,
    (req, res) => usersController.createUser(req, res));

router.post('/api/login', multipartyMiddleware,
    (req, res) => usersController.loginUser(req, res));

router.post('/api/logout', multipartyMiddleware,
    (req, res) => usersController.logoutUser(req, res));

router.get('/api/user', multipartyMiddleware,
    (req, res) => usersController.getUser(req, res));

module.exports = router;