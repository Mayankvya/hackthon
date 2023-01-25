import User from "../model/User";
import bcrypt from 'bcryptjs';
export const getAllUser = async(req,res,next) => {
    let users;
    try{
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.states(404).josn({messages:"No Users Fuound"});
    }
    return res.status(200).json({users});
};

export const signup = async(req, res, next) => {
    const {name,email,password} =req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
     return console.log(err);
    }
    if(existingUser){
        return res.
        status(400)
        .json({massage: "User Already Exists ! login Instead"})
    }
     const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password :hashedPassword,
        blogs: [],
    });
    
    try {
        user.save();
    } catch (err){
    return console.log(err);
        }
    
    return res.status(201).json({user})
};

export const login =async (req, res, next)=>{
    const {name,email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
     return console.log(err);
    }
    if(!existingUser){
        return res
        .status(404)
        .json({massage: "Couldnt Find User By This Email"})
    }

 const isPasswordCorrect =bcrypt.compareSync(password,existingUser.password);
 if (!isPasswordCorrect){
    return res.status(400).json({messages:"Incorrect Password"})
 }
return res.status(200).json({massage:"Login Successsfull"})
}