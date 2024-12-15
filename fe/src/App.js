"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    function sendMessage() {
        if (!socket) {
            return;
        }
        //@ts-ignore
        socket.send("ping");
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080/");
        setSocket(ws);
        ws.onmessage = (e) => {
            alert(e.data);
        };
    }, []);
    return;
    <div>
    <input type="text" placeholder="MESSAGE PUT HERE BISH !!"></input>
    <button onClick={sendMessage}> SEND </button>
  </div>;
}
exports.default = App;
