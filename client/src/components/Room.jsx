import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import Message from "components/Message";

const END_POINT = process.env.REACT_APP_HOST_URL;

function updateStream(userPeers) {
  let videos = document.getElementById("videoContainer");
  if (videos) {
    let arr = [];
    for (let i = 0; i < videos.childNodes.length; i++) {
      if (!userPeers.includes(videos.childNodes[i].id)) {
        arr.push(videos.childNodes[i]);
      }
    }

    arr.forEach((video) => {
      videos.removeChild(video);
    });
  }
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

function toggleMic(localStream, state) {
  //console.log(localStream, state);
  if (localStream) {
    localStream.getAudioTracks().forEach((audio) => {
      console.log(audio);
      audio.enabled = !state;
    });
  }
}

function Room() {
  const loadingStatus = useSelector((state) => state.auth.loading);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const [room] = useState(useParams().id);
  const user = useSelector((state) => state.auth.user);
  const [streamLocal, setStreamLocal] = useState(null);

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
                "turn:hk-turn1.xirsys.com:80?transport=udp",
                "turn:hk-turn1.xirsys.com:3478?transport=udp",
                "turn:hk-turn1.xirsys.com:80?transport=tcp",
                "turn:hk-turn1.xirsys.com:3478?transport=tcp",
                "turns:hk-turn1.xirsys.com:443?transport=tcp",
                "turns:hk-turn1.xirsys.com:5349?transport=tcp",
              ],
            },
          ],
        },
      })
  );

  useEffect(() => {
    // Peer connect
    peer?.on("open", (id) => {
      setPeerId(id);

      // User join to room
      socket.emit("joinRoom", { name: user?.name, room, peerID: id });

      // Notify to all members in the room
      socket.on("allMembers", (userPeers) => {
        let videos = document.getElementById("videoContainer");
        if (videos) videos.innerHTML = "";
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
          streamLocal?.getTracks().forEach((track) => track.stop());
          setStreamLocal(stream);
          // Play local stream and call stream to other users
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
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStreamLocal(stream);
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
  }, [socket, room, user, peer, members, streamLocal]);

  useEffect(() => {
    return () => {
      socket?.emit("peerClose", { peerId });
    };
  }, [socket, peerId]);

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    return () => {
      streamLocal?.getTracks().forEach((track) => track.stop());
    };
  }, [streamLocal]);

  useEffect(() => {
    updateStream(members);
  }, [members]);

  if (!authStatus && !loadingStatus) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="w-full h-full flex">
      <div className="w-full sm:w-3/4 h-full no-scrollbar grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2" id="videoContainer"></div>
      <div className="w-1/4 hidden sm:block h-full border-l border-gray-300">
        <div className="w-full h-16 flex justify-around items-center border-b">
          <button className="flex flex-col justify-center items-center p-1 rounded-lg hover:bg-blue-100">
            <div>
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  opacity=".3"
                  d="M20 16V6H4v10.01L20 16zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V7l4 3.73l-4 3.74z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87c1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-xs">Screen</div>
          </button>

          <button
            onClick={() => toggleMic(streamLocal, streamLocal.getAudioTracks()[0].enabled)}
            className="flex flex-col justify-center items-center p-1 rounded-lg hover:bg-blue-100"
          >
            <div>
              <svg width="1em" height="1em" viewBox="0 0 256 256">
                <path
                  d="M213.382 221.92a8.002 8.002 0 0 1-11.302-.538l-26.46-29.106A79.72 79.72 0 0 1 136 207.59V232a8 8 0 0 1-16 0v-24.403a79.837 79.837 0 0 1-71.512-70.718a8 8 0 0 1 15.903-1.758a63.992 63.992 0 0 0 100.396 45.238l-10.875-11.962A47.99 47.99 0 0 1 80 128V87.094L42.08 45.382a8 8 0 1 1 11.84-10.764l160 176a8.002 8.002 0 0 1-.538 11.302zm-51.302-92.11A8 8 0 0 0 176 124.43V64a48.005 48.005 0 0 0-88.845-25.225a8.001 8.001 0 0 0 .884 9.591zm30.085 31.855a7.993 7.993 0 0 0 10.364-4.536a79.616 79.616 0 0 0 4.983-20.25a8 8 0 0 0-15.903-1.758a63.674 63.674 0 0 1-3.98 16.18a8 8 0 0 0 4.536 10.364z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-xs">Micro</div>
          </button>

          <button className="flex flex-col justify-center items-center p-1 rounded-lg hover:bg-blue-100">
            <div>
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  d="M12 2a7 7 0 0 1 7 7a7 7 0 0 1-7 7a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M6 22a2 2 0 0 1-2-2c0-.38.1-.73.29-1.03l1.82-3.16A9.007 9.007 0 0 0 12 18c2.25 0 4.31-.83 5.89-2.19l1.82 3.16c.19.3.29.65.29 1.03a2 2 0 0 1-2 2H6z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-xs">Webcam</div>
          </button>
        </div>
        <Message room={room} socket={socket} />
      </div>
    </div>
  );
}

export default Room;
