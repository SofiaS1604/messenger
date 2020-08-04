const User = require('../models/User');
const randomString = require('randomstring');

module.exports.createUser = (req, res) => {
    const user = new User(req.body);
    user.save((error) => {
        if (error) {
            let obj_errors = {};
            let login_error = {login: "Path `login` is required or incorrect."};
            for (key in error.errors)
                obj_errors[key] = error.errors[key].properties.message;

            return res.status(422).json(!obj_errors ? login_error : obj_errors);
        }
        return res.status(200).json({id: user._id});
    })
};

module.exports.loginUser = async (req, res) => {
    if (req.body.login && req.body.password) {
        let user = await User.findOne({$and: [{login: req.body.login}, {password: req.body.password}]});
        if (user) {
            user.token = randomString.generate();
            await user.save();
            return res.status(200).json({token: user.token});
        } else {
            return res.status(404).json({error: "Incorrect login or password"});
        }
    } else {
        let obj_errors = {};
        if (!req.body.login)
            obj_errors.login = "Path `login` is required.";

        if (!req.body.password)
            obj_errors.password = "Path `password` is required.";

        res.status(422).json(obj_errors)
    }
};

module.exports.getToken = async (token, res) => {
    let tokenUser = token ? token.split(" ")[1] : '';
    let user = tokenUser !== '-1' ? await User.findOne({token: tokenUser}) : '';

    if (!user) {
        return res.status(403).json({message: "You need authorization"});
    }

    return user;
};

module.exports.logoutUser = async (req, res) => {
    let user = await this.getToken(req.header('Authorization'), res);
    if (user !== null) {
        user.token = '-1';
        await user.save();
        return res.status(200).send('')
    } else {
        return res.status(403).json({message: "You need authorization"})
    }
};

module.exports.getUser = async (req, res) => {
    let user = await this.getToken(req.header('Authorization'), res);
    if (user !== null) {
        return res.status(200).json({first_name: user.first_name, surname: user.surname, login: user.login})
    }
};