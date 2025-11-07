import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {

    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("email",JSON.stringify(email));
        setUser("");
        setEmail("");
    };
    return ( 
        <div className="formWrapper">
            <form onSubmit={handleSubmit} className="loginForm">
               <h3>Login Here</h3>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={user}
                    id="username"
                    required
                    onChange={(e) => setUser(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Log In</button>
            </form>
        </div>
    );
};  

export default Login;
