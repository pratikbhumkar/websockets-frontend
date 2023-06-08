import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
export function Login() {
    const { loginWithRedirect } = useAuth0();
    return <div className="full-screen">
        <button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
}