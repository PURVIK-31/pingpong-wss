import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  const inputref = useRef();
  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputref.current.value;
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);
  return (
    <div>
      <input
        ref={inputref}
        type="text"
        placeholder="MESSAGE PUT HERE BISH !!"
      />
      <button onClick={sendMessage}> SEND </button>
    </div>
  );
} // Add closing brace here

export default App;
