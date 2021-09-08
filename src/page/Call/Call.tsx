import { onMount } from "solid-js";
import "./Call.scss";
import * as io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000/";

const Call = () => {
  let webcamVideo;
  let remoteVideo;
  let webcamButton;
  let callButton;
  let callInput;
  let answerButton;
  let hangupButton;
  console.log("test", ENDPOINT);
  const socket = io.connect(ENDPOINT);

  socket.on("connnection", () => {
    console.log("[io] connected");
  });
  onMount(() => {
    const ROOM_ID = Math.floor(Math.random() * 9999);
    const USER_ID = 10;
    console.log(socket);
    socket.on("connnection", () => {
      console.log("connected to server");
    });
    socket.on("disconnect", () => {
      console.log("Socket disconnecting");
    });
    socket.emit("join-room", ROOM_ID, USER_ID);
  });

  const onClickWebcamButton = () => {};

  return (
    <div>
      <h2>1. Start your Webcam</h2>
      <div class="videos mr-36">
        <span>
          <h3>Local Stream</h3>
          <video ref={webcamVideo} autoplay playsinline></video>
        </span>
        <span>
          <h3>Remote Stream</h3>
          <video ref={remoteVideo} autoplay playsinline></video>
        </span>
      </div>

      <button ref={webcamButton} onClick={onClickWebcamButton}>
        Start webcam
      </button>
      <h2>2. Create a new Call</h2>
      <button ref={callButton} disabled>
        Create Call (offer)
      </button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>

      <input ref={callInput} />
      <button ref={answerButton} disabled>
        Answer
      </button>

      <h2>4. Hangup</h2>

      <button ref={hangupButton} disabled>
        Hangup
      </button>
    </div>
  );
};

export default Call;
