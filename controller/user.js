'use strict';

const { User } = require('../modules/index');
const brcypt = require('bcrypt');
const base64 = require('base-64');
const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);

    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: await brcypt.hash(req.body.password, 12)
        };
        const newUser = await User.create(user);
        res.status(200).send(newUser);
    } catch (error) {
        console.log(error);
    }
}
const loginUser = async (req, res) => {
try {
    const header = req.headers.authorization.split(' ')[1];
    const deconde=base64.decode(header).split(':')
    const [username, password]=deconde;
    const user = await User.findOne({where:{username:username}});
    if(user){
    const check = await brcypt.compare(password,user.password);
    if(check){
        res.status(200).send(user);
    }
    else{
        res.status(401).send('the password is not coorrect');
    }
    }
    else{
        res.status(401).send('the username is not corecct');
    }

    
} catch (error) {
    console.log(error);
}
}


module.exports = {
    getAllUser,
    createUser,
    loginUser
}
