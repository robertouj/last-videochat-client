import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { SocketContext } from "../Context";

function Chat() {
  const { sendMessage, chat } = useContext(SocketContext);
  const [chatText, setChatText] = useState("");

  return (
    <>
      <div className="main__chat_window">
        <div className="messages">
          <Typography gutterBottom variant="h6">
            Chat
          </Typography>
          <ul className="chat-messages">
            {!chat ? "Start chatting..." : chat.map((msg) => <li>{msg}</li>)}
          </ul>
        </div>
      </div>
      <div className="main__message_container">
        <Typography gutterBottom variant="h6">
          Send a message
        </Typography>
        <TextField
          label="Text to send..."
          onChange={(e) => setChatText(e.target.value)}
          className="chat-input"
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => sendMessage(chatText)}
          className="send-button"
        >
          Send
        </Button>
      </div>
    </>
  );
}

export default Chat;
