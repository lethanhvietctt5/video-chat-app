import { useParams } from "react-router";
import Message from "./Message";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "../actions/auth";
import io from "socket.io-client";
import Peer from "peerjs";

const END_POINT = "https://room-call-chat-app.herokuapp.com/";
// const END_POINT = "http://localhost:5000";

function Room({ isAuthenticated, user }) {
  let [room] = useState(useParams().id);
  let [socket] = useState(() =>
    io(END_POINT, {
      transports: ["websocket"],
      upgrade: false,
    })
  );
  let [members, setMembers] = useState([]);
  let [peer] = useState(() => new Peer());
  let [peerId, setPeerId] = useState();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    peer?.on("open", (id) => {
      setPeerId(id);
      socket.emit("joinRoom", { name: user.name, room, peerID: id });

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

  function updateStream(userPeers) {
    let videos = document.getElementById("videoContainer");
    let arrVideos = document.querySelectorAll("#videoContainer > *");
    let arr = [];
    console.log(userPeers, arrVideos.length, videos.childNodes.length);
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(Room);
