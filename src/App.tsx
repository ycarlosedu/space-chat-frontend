import { useState } from "react";

import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

export type onAuthResponse = {
  user: {
    username: string;
    secret: string;
    avatar?: string;
    created: string | Date;
    custom_json?: any;
    email: string;
    first_name: string;
    last_name: string;
    id: number;
    is_authenticated: boolean;
    is_online: boolean;
    last_message?: {
      id: 667287, 
      text: "falae", 
      created: "2023-04-20 17:22:19.992894+00:00", 
      attachments: []
    }
  }
  projectID: string;
}
function App() {
  const [data, setData] = useState<onAuthResponse>();

  if (!data) {
    return <AuthPage onAuth={(onAuthResponse: any) => setData(onAuthResponse)} />;
  } else {
    return <ChatsPage user={data.user} projectID={data.projectID} />;
  }
}

export default App;