const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//@desc Register a new user 
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async  (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }
    const userAvailable = await User.findOne({email});    
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
   const user = await User.create({
        userName,
        email,
        password: hashedPassword
    });
    console.log(`User created: ${user}`);
    if(user){
        res.status(201).json({
            _id: user.id,
            userName: user.userName,
            email: user.email,
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.json({ message: 'User registered successfully' });
});


//@desc Login a user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }
    const user= await User.findOne({
        email
    });
    //compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken =jwt.sign({
            user: {
                userName: user.userName,
                email: user.email,
                id: user.id
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '300s'
        }
        );
        res.status(200).json({
            accessToken
        });
        
    }
    else{
        res.status(401);
        throw new Error('Invalid credentials');
    }   
   
}
);


//@desc current user data   
//@route GET /api/users/current
//@access Private

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
}
);


module.exports = {
    registerUser,
    loginUser,
    currentUser
  
};