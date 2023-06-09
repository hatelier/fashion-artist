import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FormEvent } from 'react';

interface FormProps {
    password: string;
    setPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    errorMessage: string;
    handleConfirmPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


export const NewPasswordToken = () => {
    return (
        <div className="auth">
        <div className="logo-container">
          <img className="logo" src={"/mxlogo.png"} alt="logo" />  
        </div>
        <div className="login-container">
          <NewPasswordForm />  
        </div>
        <div className="image-container">
            <img className="main-image" src = "mq.png" alt = "mq" />
         </div>
        </div>
    ); 
};



const NewPasswordForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        // Extract token and email from URL query parameters
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        const email = searchParams.get("email");

        if (!token || !email) {
          setErrorMessage("Invalid URL");
          return;
        }

        try {
            await axios.post("/password/resettoken", {email, token, password});
            alert("Password Reset Successful");
            navigate('/auth');
        } catch (error) {
            console.error(error);
        }
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        setErrorMessage("");
    };
    return <Form 
    password={password}
    setPassword={setPassword}
    confirmPassword={confirmPassword}
    setConfirmPassword={setConfirmPassword} 
    onSubmit={onSubmit}
    errorMessage={errorMessage}
    handleConfirmPasswordChange={handleConfirmPasswordChange}
    />;
};

const Form = ({
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSubmit,
    errorMessage,
    handleConfirmPasswordChange }: FormProps) => {
    return (
        <div className="auth-container">
            
         <form className="form forgot-password" onSubmit={onSubmit}>
            <span className="title">Set new password</span>
            <span className= "title-text">Must be at least 8 characters </span>

            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="new-password" className="input" value={password} onChange={(event) => setPassword(event.target.value)} required/>
            
            <label htmlFor="confirm-password" className="label">Confirm Password</label>
            <input type="password" id="confirm-password" className="input" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
            
            {errorMessage && <p className="error">{errorMessage}</p>}

            <button type="submit" className="submit">Reset Password</button>
            <span className= "account-text">Back to <Link to="/auth" className="to-register">Login</Link></span>
         </form>
         
     </div> 
     )}