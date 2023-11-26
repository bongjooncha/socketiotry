const User = require("../Models/user");
const userController = {};

//user 저장
userController.saveUser = async(userName, socketId)=>{
    //있는 유저
    let user = await User.findOne({name:userName});
    //없는 유저
    if (!user){
        user = new User({
            name: userName,
            token: socketId,
            online: true,
        });
    }
    user.token = socketId;
    user.online = true;

    await user.save();
    return user;
};

//user찾기
userController.checkUser = async(socketId)=>{
    const user = await User.findOne({token: socketId});
    if (!user) throw new Error("user not found");
    return user;
};


module.exports = userController;