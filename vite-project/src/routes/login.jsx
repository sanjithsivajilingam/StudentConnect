import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import './login.css'


export default function Login() {


    const [err, setErr] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/home")
        } catch (err) {
          setErr(true);
        }
      };


    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
         <div className="padding1"> <button>Sign in</button></div>
          {err && <span>Please login now</span>}
        </form>
        
      </div>
    );
    }