import { useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormEvent } from 'react';

interface FormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (email: string) => void;
    label: string;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  }

export const Auth = () => {
    return (
        <div className="auth">
        <div className="logo-container">
          <img className="logo" src={"/mxlogo.png"} alt="logo" />  
        </div>
        <div className="login-container">
          <Login />  
        </div>
        <div className="image-container">
            <img className="main-image" src = "mq.png" alt = "mq" />
         </div>
        </div>
    ); 
};

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [_, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {email, password});
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }

    return <Form email={email} setEmail={setEmail} password={password} setPassword={setPassword} label="Login" onSubmit={onSubmit}/>;

};


const Form = ({email, setEmail, password, setPassword, label, onSubmit }: FormProps) => {
    return (
        <div className="auth-container">
         <form className="form" onSubmit={onSubmit}>
            <span className="title">Welcome</span>
            <span className= "title-text">Your exploration starts here</span>

            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" className="input" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" className="input" value={password} onChange={(event) => setPassword(event.target.value)} required/>
            
            <Link to = "/auth/register" className="forgot">Forgot Password?</Link>
            <button type="submit" className="submit">{label}</button>

            <span className= "account-text">No account? <Link to="/register" className="to-register">Sign up</Link></span>
         </form>
         
     </div> 
     );
}