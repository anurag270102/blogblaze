const Contact=require('../../Models/Contact.model');
const Contactuser=async(req,res)=>{
    const data=await Contact(req.body)
    const newcontact=await data.save();
   return res.status(201).json({message:'success',contact:newcontact})
}
module.exports={Contactuser};