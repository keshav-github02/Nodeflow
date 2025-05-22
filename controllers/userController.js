const asyncHandler = require('express-async-handler');

//@desc Register a new user 
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async  (req, res) => {
    res.json({ message: 'User registered successfully' });
});

//@desc Login a user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User logged in successfully' });
}
);


//@desc current user data   
//@route GET /api/users/current
//@access Private

const CurrentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Current user data' });
}
);


module.exports = {
    registerUser,
    loginUser,
    CurrentUser
  
};