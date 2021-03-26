import { useParams } from "react-router";
import Message from "../Message/Message";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "../../actions/auth";
import io from "socket.io-client";
import Peer from "peerjs";

const END_POINT = "http://localhost:5000";

function Room({ isAuthenticated, user }) {
  let [room] = useState(useParams().id);
  let [socket, setSocket] = useState(null);
  let [members, setMembers] = useState([]);
  let [peer, setPeer] = useState(null);

  useEffect(() => {
    loadUser();
    setSocket(
      io(END_POINT, {
        transports: ["websocket", "polling", "flashsocket"],
      })
    );

    setPeer(new Peer("", { host: "localhost", port: 9000, path: "/" }));
  }, []);

  useEffect(() => {
    peer?.on("open", (id) => {
      socket.emit("joinRoom", { name: user.name, room, peerID: id });

      socket.on("allMembers", (userPeers) => {
        setMembers(userPeers);
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            playStream(id, stream);
            userPeers.forEach((member) => {
              if (member !== peer.id) {
                let call = peer.call(member, stream);
                call?.on("stream", (remoteStream) => {
                  playStream(member, remoteStream);
                });
              }
            });
            console.log(id, userPeers[1]);
          });

        // Answer
        peer.on("call", (call) => {
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
              call.answer(stream);
              playStream(id, stream);
              userPeers.forEach((member) => {
                if (member !== peer.id) {
                  call?.on("stream", (remoteStream) => {
                    playStream(member, remoteStream);
                  });
                }
              });
            });
        });
      });
    });
  }, [socket, room, user, peer, members]);

  // useEffect(() => () => socket?.close());

  function playStream(id, stream) {
    if (!document.getElementById(id)) {
      let video = document.createElement("video");
      let videos = document.getElementById("videoContainer");

      video.className = "w-1/2 h-1/2";
      video.srcObject = stream;
      video.muted = "muted";
      video.id = id;
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {})
          .catch((error) => {
            console.log(error);
          });
      }
      videos.appendChild(video);
    }
  }

  return (
    <div className="w-full h-full flex">
      <div className="w-3/4 h-full flex overflow-y-scroll" id="videoContainer"></div>
      <div className="w-1/4 h-full border-l border-gray-300">
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
