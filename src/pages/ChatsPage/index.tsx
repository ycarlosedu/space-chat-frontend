import { PrettyChatWindow } from "react-chat-engine-pretty";
import { onAuthResponse } from "../../App";

const ChatsPage = ({user, projectID}: onAuthResponse) => {

  return (
    <section id="ChatPage">
      <PrettyChatWindow
        projectId={projectID || ""}
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </section>
  );
};

export default ChatsPage;