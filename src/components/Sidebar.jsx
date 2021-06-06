import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../Context";

function Sidebar({ children }) {
  const { states, startSession, setName, leaveCall, isSessionAvailable } =
    useContext(SocketContext);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__buttons">
          <Button
            disabled={!states.hangupButtonEnabled}
            variant="contained"
            color="secondary"
            startIcon={<PhoneDisabled fontSize="large" />}
            fullWidth
            onClick={leaveCall}
          >
            Hang Up
          </Button>
          <Button
            disabled={!isSessionAvailable}
            variant="contained"
            color="primary"
            startIcon={<Phone fontSize="large" />}
            fullWidth
            onClick={startSession}
          >
            Create Session
          </Button>
        </div>
        <div className="sidebar__name">
          <label>
            Your Name:
            <input
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        {children}
      </div>
    </>
  );
}

export default Sidebar;
