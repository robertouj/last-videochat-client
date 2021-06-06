import React, { useContext } from "react";
import Chat from "./Chat";
import { SocketContext } from "../Context";

function VideoChat() {
  const { myVideo, userVideo, name, remoteName } = useContext(SocketContext);

  return (
    <>
      <div className="header">
        <div className="logo">
          <h3>VideoChat Component</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__left">
          <div className="videos__group">
            <div className="video-grid">
              <div className="video-grid__remote_video">
                <div>Remote name: {remoteName || "NoName"}</div>
                {/* Video element where show the remote stream from RTCPeerconnection */}
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  className="remote_video"
                />
              </div>
              <div className="video-grid__local_video">
                <div>My name: {name || "NoName"}</div>
                {/* Video element where show the local stream from getUserMedia() */}
                <video
                  playsInline
                  ref={myVideo}
                  autoPlay
                  className="local_video"
                />
              </div>
            </div>
          </div>
          <div className="options">
            <div className="options__left"></div>
            <div className="options__right"></div>
          </div>
        </div>
        <div className="main__right">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default VideoChat;
