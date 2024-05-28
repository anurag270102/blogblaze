const UserModel = require('../../Models/User.model');

 const Createuser = async (req, res) => {
    const req_email = req.body.email;
    try {
        const dbmail = await UserModel.findOne({
            email: req_email
        });
        if (dbmail) {
            return res.status(400).json({ message: 'already exist' });
        }
        const newUser = UserModel(req.body);
        const result = await newUser.save();
        // console.log(result);
        return res.status(201).json({ user: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}
module.exports={Createuser};