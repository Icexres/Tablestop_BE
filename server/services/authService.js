const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User }= require('../models');

const authService = {
    async signup(userData){
        const {username, password, email, phone, role} = userData;
        const existingUser = await User.findOne({where: {email}});
        if (existingUser){
            throw { statusCode: 400, message: 'User with this email already exists' };
        } 
        const saltRounds=10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            username,
            phone,
            email,
            password: hashedPassword,
            role: role||'user',
        });

        const token=jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.SECRET,
            {expiresIn: '24h'},
        );

        return{
            user:{
                id:user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                role: user.role,
                profile_photo_url: user.profile_photo_url
            },
            token,
        };
    },

async login(email, password){
    const user = await User.findOne({where: {email}});
    if (!user){
        throw { statusCode: 401, message: 'Invalid email or password' };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid){
        throw { statusCode: 401, message: 'Invalid email or password' };
    }
    const token = jwt.sign(
        {id: user.id, email: user.email, role: user.role},
        process.env.SECRET,
        {expiresIn: '24h'},
    );   
    return {
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile_photo_url: user.profile_photo_url
        },
        token,
    };
},
async getProfile(userId){
    const user = await User.findByPk(userId, {
        attributes: ['id', 'username', 'email', 'phone', 'role', 'profile_photo_url'],
    });
    if (!user) {
    throw { statusCode: 404, message: 'User not found' };
    }
return user;
},
};

module.exports = authService;