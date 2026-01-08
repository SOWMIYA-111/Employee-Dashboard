import { useState } from "react";
import { login } from "../utils/auth";

export default function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        if (login(user, pass)) window.location.reload();
        else alert("Invalid Login");
    };

    return (
        <div className="center">
            <h2>Login</h2>
            <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}