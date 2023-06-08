import { ChatWindow } from "./components/ChatWindow";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./components/Login";

export default function App() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <ChatWindow /> : <Login />;
}

