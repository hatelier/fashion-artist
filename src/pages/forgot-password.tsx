import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";

interface FormProps {
    email: string;
    setEmail: (email: string) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    message: string;
}


export const ForgotPassword = () => {
    return (
        <div className="auth">
        <div className="logo-container">
          <img className="logo" src={"/mxlogo.png"} alt="logo" />  
        </div>
        <div className="login-container">
          <Register />  
        </div>
        <div className="image-container">
            <img className="main-image" src = "mq.png" alt = "mq" />
         </div>
        </div>
    ); 
};



const Register = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/password/forgot", {email});
            // setMessage(response.data.message);
            if(response.data.message === "User not found") {
                window.alert("User not found");
            } else {
                navigate("/reset-password");  
            }
            
        } catch (error) {
            console.error('Forgot Password Error', error);
            setMessage('Error occurred while sending password reset email');
        }
    };


    return <Form 
    email={email} setEmail={setEmail} handleSubmit={handleSubmit} message={message}
    />;
};

const Form = ({
    email, setEmail,handleSubmit, message
     }: FormProps) => {
    return (
        <div className="auth-container">
         <form className="form forgot-password" onSubmit={handleSubmit}>
            <span className="title">Forgot Password?</span>
            <span className= "title-text">No worries, we will send you reset instructions</span>

            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" value={email} placeholder="abc123as@mtumx.com" className="input" onChange={(event) => setEmail(event.target.value)} required/>
            
            <button type="submit" className="submit">Reset Password</button>

            <span className= "account-text">Back to <Link to="/auth" className="to-register">Login</Link></span>
         </form>
         {message && <p>{message}</p>}
     </div> 
     )}