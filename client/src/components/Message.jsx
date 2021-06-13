import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Message({ room, socket }) {
  let [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages([...messages, message]);
        let element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight;
      });
    }

    return () => {
      socket?.off("message");
    };
  });

  function handleInput(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  function handleSendMessage(e) {
    e.preventDefault();
    if (message && socket) {
      socket.emit("sendMessage", { name: user.name, msg: message, room });
      setMessage("");
    }
  }

  function renderMessage(item, index) {
    if (item.name !== "Admin")
      return (
        <div
          key={index}
          className={
            item.name === user.name ? "flex justify-end" : "flex justify-start"
          }
        >
          <div
            key={index}
            className={
              item.name === user.name
                ? "w-auto max-w-full inline-block p-2 rounded-xl bg-blue-500 my-1 text-white"
                : "w-auto max-w-full inline-block p-2 rounded-xl bg-gray-400 my-1"
            }
          >
            <p className="text-xs font-bold w-auto max-w-full">{item.name}</p>
            <p className="w-auto max-w-full">{item.msg}</p>
          </div>
        </div>
      );
    return (
      <div key={index} className="flex justify-center text-gray-400">
        {item.msg}
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="h-full mx-2">
        <div
          id="messages"
          className="h-full pb-16 text-sm pt-2 overflow-y-auto no-scrollbar"
        >
          <div className="">
            {messages?.map((item, index) => renderMessage(item, index))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-1/4 bg-white">
        <form
          className="h-16 w-full flex border-t py-2 items-center justify-between"
          onSubmit={handleSendMessage}
        >
          <div className="h-full w-10/12 p-2 flex items-center">
            <input
              type="text"
              name="message"
              autoComplete="off"
              placeholder="Enter message ..."
              value={message}
              onChange={handleInput}
              className="h-full w-full text-xs no-scrollbar resize-none outline-none border-gray-400 border rounded-lg p-2"
            />
          </div>
          <div className="h-full flex items-center w-2/12 mr-2 py-2">
            <button
              type="submit"
              className="focus:outline-none px-2 py-1 bg-blue-700 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Message;
