const UserModel = require('../../Models/User.model');

const Loginuser = async (req, res) => {
    const data=await UserModel.find({
        email:req.body.email,
        password:req.body.password
    })
    if(!data) return res.status(404).json({message:'create account first'})
    return res.status(201).json({message:'sucess',user:data});
}
module.exports = { Loginuser };