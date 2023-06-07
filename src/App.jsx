import { ChatWindow } from "./components/ChatWindow";
import { useAuth0 } from "@auth0/auth0-react";

const providerConfig = {
  domain: "dev-p1jwcn1ucf567lqn.au.auth0.com",
  clientId: "uwGHRLzNVW3xcbJIIWFSatOUKCKGkbFK",
  authorizationParams: {
    redirect_uri: window.location.origin
  },
};

export default function App() {
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //       loginWithRedirect();
    //     }
    //   }, [isAuthenticated, loginWithRedirect]);

return isAuthenticated ? <ChatWindow/> : <button onClick={() => loginWithRedirect()}>Log In</button>;
}

