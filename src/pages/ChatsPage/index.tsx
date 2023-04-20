import { PrettyChatWindow } from "react-chat-engine-pretty";
import { onAuthResponse } from "../../App";

const ChatsPage = ({user, projectID}: onAuthResponse) => {

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={projectID || ""}
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;