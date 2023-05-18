const Users = require('../models/users.model');
const bcrypt = require('bcrypt');

const createUser = async(req, res) => {
    try {
        const {username, email, password} = req.body;
        if(typeof(username)  != 'string' || !username){
            return res.status(400).json({
                error: 'invalid username',
                message: 'username canot be null or diferent to string'
            })
        };
        if(typeof(email)  != 'string' || !email){
            return res.status(400).json({
                error: 'invalid email',
                message: 'email canot be null or diferent to string'
            })
        };
        if(typeof(password)  != 'string' || !password){
            return res.status(400).json({
                error: 'invalid password',
                message: 'password canot be null or diferent to string'
            })
        }

        const hashed = await bcrypt.hash(password, 10);

        await Users.create({username, email, password: hashed})
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({
            where: {email}
        });
        if(!user){
            return res.status(400).json(
                {
                    error:'invalid email',
                    message: 'email not exist'
                }
            );
        }
        
        console.log(user.password);
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).json({
                message:'you shall not pass',
            })
        }

       
        const {firstname, lastname, id, username, roleid } = user;

        res.json({firstname, lastname, id, username, email, roleid });

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createUser,
    login,
}