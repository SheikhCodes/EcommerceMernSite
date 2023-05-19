const router=require("express").Router();
const User=require("../models/User")
const CryptoJs=require("crypto-js")
const jwt =require("jsonwebtoken")
//REGISTER

router.post("/register",async(req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(req.body.password,process.env.SECRETKEY).toString(),
    });

    //To save in DB 
try{
   const savedUser= await newUser.save();

   res.status(201).json(savedUser)
}
catch(err){
    res.status(500).json(err);
}

});

//login

router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong credentials")

        const hashedPasword=CryptoJs.AES.decrypt(
            user.password,
            process.env.SECRETKEY
        );
        const ogpassword=hashedPasword.toString(CryptoJs.enc.Utf8);

        ogpassword!==req.body.password &&
            res.status(401).json("Wrong credentials");

            const accesstoken=jwt.sign(
            {
                id:user._id,
                isAdmin:user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
            );
        const {password, ...others}=user._doc;    

        res.status(200).json({...others,accesstoken});
    }catch(err){
    res.status(500).json(err);
    }
});

module.exports=router;