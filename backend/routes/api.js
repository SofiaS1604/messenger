const {Router} = require('express');
const router = Router();
const randomString = require('randomstring');
const path = require('path');
const multipart = require('connect-multiparty');
const multipartyMiddleware = multipart();
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './backend/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, randomString.generate() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});
const usersController = require('../controllers/UsersController');

router.post('/api/signup', multipartyMiddleware,
    (req, res) => usersController.createUser(req, res));

router.post('/api/login', multipartyMiddleware,
    (req, res) => usersController.loginUser(req, res));

router.post('/api/logout', multipartyMiddleware,
    (req, res) => usersController.logoutUser(req, res));

router.get('/api/user', multipartyMiddleware,
    (req, res) => usersController.getUser(req, res));

router.post('/api/updateAvatar', upload.single('avatar'),
    (req, res) => usersController.updateAvatar(req, res));

router.post('/api/updateUser', multipartyMiddleware,
    (req, res) => usersController.updateUser(req, res));

router.delete('/api/deleteUser', multipartyMiddleware,
    (req, res) => usersController.deleteUser(req, res));

module.exports = router;