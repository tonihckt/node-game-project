const server = require("http").Server();
const io = require("socket.io")(server);
const port = require("./config").SERVER_PORT;

require("./backend/connect")(io);

const banner = `
****************************
    - NODE GAME PROJECT -
    ---------------------
     Tic-Tac-Toe -Server
****************************
Status: Online
Listening on port ${port}
`;
// maneja una instacia de evento
/// manejo de eventos simple
// io.on("connection", (socket) => {
//     socket.on("register", (user) => {
//         console.info(`User registered: {name: ${user.name}, id: ${user.id}}`)
//     });
// });
// server.listen(port,()=> {
//     console.info(banner)
// })

////////////////////////////
//////////////////////////////////
server.listen(port, () => {
    console.info(banner);
});
