const {createServer} = require("http");
const app = require("./app");
const {Server} = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors:{
        origin:["http://localhost:5001", 'http://localhost:3000']
    }
})

require("./utils/io")(io)

httpServer.listen(process.env.PORT,()=>{
    console.log("server listening port",process.env.PORT);
})