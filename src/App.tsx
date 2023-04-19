import { useState } from "react";

import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user: any) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;