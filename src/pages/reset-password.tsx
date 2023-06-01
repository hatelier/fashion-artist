import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormEvent } from 'react';

interface FormProps {
    firstname: string;
    setFirstname: (value: string) => void;
    lastname: string;
    setLastname: (value: string) => void;
    occupation: string;
    setOccupation: (value: string) => void;
    companyname: string;
    setCompanyname: (value: string) => void;
    updates: boolean;
    setUpdates: (value: boolean) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (email: string) => void;
    label: string;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  }


export const ResetPassword = () => {
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
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [password, setPassword] = useState("")
    const [updates, setUpdates] = useState(false)
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                firstname, lastname, email, occupation, companyname, password, updates,
            });
            alert("Registration Completed")
        } catch (error) {
            console.error(error);
        }
    }
    return <Form 
    firstname={firstname} setFirstname={setFirstname} 
    lastname={lastname} setLastname={setLastname}
    email={email} setEmail={setEmail}
    occupation={occupation} setOccupation={setOccupation}
    companyname={companyname} setCompanyname={setCompanyname}
    password={password} setPassword={setPassword} 
    updates={updates} setUpdates={setUpdates}
    label="Sign Up" onSubmit={onSubmit}/>;
};

const Form = ({
    firstname, setFirstname,
    lastname, setLastname,
    email, setEmail,
    occupation, setOccupation,
    companyname, setCompanyname,
    password, setPassword, 
    updates, setUpdates,
    label, onSubmit }: FormProps) => {
    return (
        <div className="auth-container">
         <form className="form forgot-password" onSubmit={onSubmit}>
            <span className="title">Password Reset</span>
            <span className= "title-text">We sent a code to abc12_wf@gmail.com</span>
            <div className="inputfield">
              <input type="number" maxLength={1} className="input-otp" disabled />
              <input type="number" maxLength={1} className="input-otp" disabled />
              <input type="number" maxLength={1} className="input-otp" disabled />
              <input type="number" maxLength={1} className="input-otp" disabled />
              <input type="number" maxLength={1} className="input-otp" disabled />
              <input type="number" maxLength={1} className="input-otp" disabled />
            </div>
            
            <button type="submit" className="submit"><a href="/new-password">Continue</a></button>

            <span className= "account-text">Didn't recieve the email? <Link to="/register" className="to-register">Click to resend</Link></span>
            <span className= "account-text">Back to <Link to="/register" className="to-register">Login</Link></span>
         </form>
         
     </div> 
     )}