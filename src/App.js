import VideoChat from "./components/VideoChat";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

import "./styles.css";

function App() {

  return (
    <>
      <h1>Video Chat WebRTC</h1>
      <VideoChat />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </>
  );
}

export default App;
