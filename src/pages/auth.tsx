import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormEvent } from 'react';
import { toast } from "react-toastify";
import { axiosInstance, setAuthorizationHeader } from "../components/axiosInstance";
import { useCookies } from "react-cookie";

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
            <picture>
                <source className="main-image" media="(min-width: 480px)" srcSet="mq.png" />
                <img className="main-image" src = {require('../assets/pngs/manaequin-mobile.png')} alt = "mq" />
            </picture>
        </div>
        </div>
    ); 
};

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["access_token", "userId"]);
    
    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/login', {email, password});

            if(response.data.message === 'User not found!') {
                toast.error("User not found!");
            } else if(response.data.message === 'Username or Password incorrect!') {
                toast.error("Username or Password incorrect!");
            } else {
                const token = response.data.token;
                const userId = response.data.userID;
                // Set the access token and userId in cookies using the `react-cookie` library
                setCookie("access_token", token, { path: "/" });
                setCookie("userId", userId, { path: "/" });

                // Set the authorization header globally for Axios requests
                setAuthorizationHeader(token, userId);
                navigate("/");
            }

        } catch (error) {
            console.error(error);
        }
    }

    return <Form email={email} setEmail={setEmail} password={password} setPassword={setPassword} label="Login" onSubmit={OnSubmit}/>;

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
            
            <Link to = "/forgot-password" className="forgot">Forgot Password?</Link>
            <button type="submit" className="submit">{label}</button>

            <span className= "account-text">No account? <Link to="/register" className="to-register">Sign up</Link></span>
         </form>
         
     </div> 
     );
}