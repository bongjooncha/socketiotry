const chatController = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller");

module.exports = function(io){
    io.on("connection",async(socket)=>{
        console.log("client is connected",socket.id);

        socket.on("login",async(userName,cb)=>{
            //유저 저장
            try{
                console.log("back에서 받음",userName);
                const user = await userController.saveUser(userName,socket.id);
                const welcomMessage ={
                    chat: `${user.name} is joined to this room`,
                    user: {id: null, name:"system"},
                };
                io.emit("message",welcomMessage);
                cb({ok:true, data: user});
            }catch(error){
                cb({ok: false, error: error.message});
            }
        });

        socket.on("sendMessage",async(message,cb)=>{
            try{
                //user 찾기 (await을 통해서 데이터 정제)
                const user = await userController.checkUser(socket.id);
                //메세지 저장
                const newMessage = await chatController.saveChat(message,user);
                io.emit("message",newMessage);
                cb({ok:true});
            }catch(error){
                cb({ok:false, error: error.message});
            }
        });

        socket.on("disconnect", async ()=>{
            const user = await userController.checkUser(socket.id);
            const goodbyeMessage ={
                chat: `${user.name} left this room`,
                user: {id: null, name:"system"},
            };
            io.emit("message",goodbyeMessage);
            console.log("사용자 끊김");
        });
    });
};