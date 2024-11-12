//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
// Assigning users to the variable User
const User = db.users;
const Role = db.roles;
const RoleUsers = db.role_users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
   const { userName, email, password } = req.body;
   const data = {
     userName,
     email,
     password: await bcrypt.hash(password, 10),
   };
   //saving the user
   const user = await User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.secretKey, {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
     });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
     return res.status(201).send(user);
   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
};


//login authentication

const login = async (req, res) => {
  // console.log(req.body);
  // return false;
 try {
const { email_or_username, password } = req.body;
console.log('req.body');
console.log(req.body);
console.log(email_or_username);
   //find a user by their email
   if(!password || !email_or_username){
    return res.status(422).send('Please input your email and password');
  }
   const user = await User.findOne({
    attributes: ['id','username', 'email', 'password'],
     where: {
     [Op.or]: [{ email: email_or_username }, { username: email_or_username }],
   } 
   });

   if (user) {
     const isSame = await bcrypt.compare(password, user.password);
     if (isSame) {
       const role_users = await RoleUsers.findOne({
        attributes: ['roles_id','users_id'],
        where: {
          users_id: user.id
        }
       });
       if(role_users){
          const role = await Role.findOne({
            attributes: ['name'],
            where: {
              id: role_users.roles_id
            }
          });
          return res.status(201).json({success:true, message:'Success to login', users:user, roles:role});
       } else {
         return res.status(400).send(`You don't have any permissions`);
       }      
     } else {
       return res.status(401).send("Authentication failed");
     }
   } else {
     return res.status(401).send("Authentication failed");
   }
 } catch (error) {
   console.log(error);
 }
};

module.exports = {
 signup,
 login,
};