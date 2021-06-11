import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import Message from "components/Message";

const END_POINT = process.env.REACT_APP_HOST_URL;

function Room() {
  const loadingStatus = useSelector((state) => state.auth.loading);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const [room] = useState(useParams().id);
  const user = useSelector((state) => state.auth.user);

  const [socket] = useState(() =>
    io(END_POINT, {
      transports: ["websocket"],
      upgrade: false,
    })
  );
  const [peerId, setPeerId] = useState();
  const [members, setMembers] = useState([]);
  const [peer] = useState(
    () =>
      new Peer({
        config: {
          iceServers: [
            { urls: [process.env.REACT_APP_ICE_URL] },
            {
              username: process.env.REACT_APP_ICE_USER,
              credential: process.env.REACT_APP_ICE_CREDENTIALS,
              urls: [
                "turn:ss-turn1.xirsys.com:80?transport=udp",
                "turn:ss-turn1.xirsys.com:3478?transport=udp",
                "turn:ss-turn1.xirsys.com:80?transport=tcp",
                "turn:ss-turn1.xirsys.com:3478?transport=tcp",
                "turns:ss-turn1.xirsys.com:443?transport=tcp",
                "turns:ss-turn1.xirsys.com:5349?transport=tcp",
              ],
            },
          ],
        },
      })
  );

  useEffect(() => {
    peer?.on("open", (id) => {
      setPeerId(id);
      socket.emit("joinRoom", { name: user?.name, room, peerID: id });

      socket.on("allMembers", (userPeers) => {
        let videos = document.getElementById("videoContainer");
        if (videos) videos.innerHTML = "";
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            playStream(id, stream, true);
            userPeers.forEach((member) => {
              if (member !== id) {
                let call = peer.call(member, stream);
                call?.on("stream", (remoteStream) => {
                  playStream(member, remoteStream);
                });
              }
            });
            updateStream(userPeers);
          });

        // Answer
        peer.on("call", (call) => {
          if (videos) videos.innerHTML = "";
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
              call.answer(stream);
              playStream(id, stream, true);
              userPeers.forEach((member) => {
                if (member !== id) {
                  call?.on("stream", (remoteStream) => {
                    playStream(member, remoteStream);
                  });
                }
              });
              updateStream(userPeers);
            });
        });

        setMembers(userPeers);
      });
    });
  }, [socket, room, user, peer, members]);

  useEffect(() => {
    return () => {
      socket?.emit("peerClose", { peerId });
    };
  }, [socket, peerId]);

  useEffect(() => {
    updateStream(members);
  }, [members]);

  if (!authStatus && !loadingStatus) {
    return <Redirect to="/login" />;
  }

  function updateStream(userPeers) {
    let videos = document.getElementById("videoContainer");
    let arr = [];
    for (let i = 0; i < videos.childNodes.length; i++) {
      if (!userPeers.includes(videos.childNodes[i].id)) {
        arr.push(videos.childNodes[i]);
      }
      console.log(arr);
    }

    arr.forEach((video) => {
      videos.removeChild(video);
    });
  }

  function playStream(id, stream, isLocal = false) {
    if (!document.getElementById(id)) {
      let video = document.createElement("video");
      let div = document.createElement("div");
      let videos = document.getElementById("videoContainer");

      div.className = "max-w-full min-w-min flex justify-center items-center";
      video.srcObject = stream;
      if (isLocal) {
        video.muted = "muted";
      }
      div.id = id;
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {})
          .catch((error) => {
            console.log(error);
          });
      }
      div.appendChild(video);
      if (videos) videos.appendChild(div);
    }
  }

  return (
    <div className="w-full h-full flex">
      <div
        className="w-full sm:w-3/4 h-full no-scrollbar grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2"
        id="videoContainer"
      ></div>
      <div className="w-1/4 hidden sm:block h-full border-l border-gray-300">
        <Message room={room} socket={socket} />
      </div>
    </div>
  );
}

export default Room;
