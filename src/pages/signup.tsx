import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormEvent, ChangeEvent } from 'react';

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
    confirmPassword: string;
    setConfirmPassword: (password: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    passwordMatchError: boolean;
    handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleConfirmPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;

  }


export const Signup = () => {
    return (
        <div className="sign">
            <div className="signuplogo-container">
                <img className="signup-logo" src={"/mxlogo.png"} alt="logo" />
            </div>
            <div className="register-container">
              <Register />  
            </div>
            <div className="signupimage-cotainer">
              <img className="signup-image-container" src={"/mq.png"} alt = "mq" />  
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
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setPasswordMatchError(false); // Reset the password match error when the password changes
      };
    
      const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        setPasswordMatchError(false); // Reset the password match error when the confirm password changes
      };
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if(password !==  confirmPassword)
            {
                setPasswordMatchError(true);
                return;
            }
            await axios.post('/auth/register', {
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
    confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
    passwordMatchError = {passwordMatchError}
    label="Sign Up" onSubmit={onSubmit} handlePasswordChange={handlePasswordChange}
    handleConfirmPasswordChange = {handleConfirmPasswordChange}/>;
};

const Form = ({
    firstname, setFirstname,
    lastname, setLastname,
    email, setEmail,
    occupation, setOccupation,
    companyname, setCompanyname,
    password, setPassword, 
    updates, setUpdates,
    confirmPassword, setConfirmPassword,
    handlePasswordChange, handleConfirmPasswordChange,
    label, onSubmit, passwordMatchError }: FormProps) => {
        
    return (
        <div className="signup-container main-grid">
         <form className="signup" onSubmit={onSubmit}>
            <span className="title">Welcome to MomentumX</span>
            <span className="title-text">Start Creating your fashion experience</span>
            
            <div className="name grid">
                <div className="firstname-container">
                <label htmlFor="firstname" className="label">First Name</label>
                <input type="text" id="firstname" className="input" value={firstname} onChange={(event) => setFirstname(event.target.value)} required/>
                </div>
                <div className="lastname-container">
                <label htmlFor="lastname" className="label">Last Name</label>
                <input type="text" id="lastname" className="input" value={lastname} onChange={(event) => setLastname(event.target.value)} required/>
                </div>
            </div>

            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" className="input" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            
            <div className="grid">
                <div className="occupation-container dropdown">
                <label htmlFor="occupation" className="label">Occupation</label>
                <select className="myDropdown" id="occupation" onChange={(event) => setOccupation(event.target.value)} required>
                    <option value="">Select an option</option>
                    <option value="3D Generalist">3D Generalist</option>
                    <option value="3D Environment Artist">3D Environment Artist</option>
                    <option value="Fashion Designer">Fashion Designer</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="XR Developer">XR Developer</option>
                    <option value="Others">Others</option>
                </select>             
                </div>
                <div className="companyname-container">
                <label htmlFor="cpompanyname" className="label">Company Name</label>
                <input type="text" id="companyname" className="companyname-input" onChange={(event) => setCompanyname(event.target.value)} required/>
                </div>
            </div>

            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" className="input" value={password} onChange={handlePasswordChange} required/>
            
            <label htmlFor="cpassword" className="label">Confirm Password</label>
            <input type="password" id="cpassword" className="input" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
            {passwordMatchError && <p className="error">Passwords do not match</p>}

            <label><input type="checkbox" id="updates" checked={updates} onChange={(event) => setUpdates(event.target.checked)}/>I will like to receive emails on future updates</label>
            <label><input type="checkbox" checked />I agree to the <Link to="/" className="forgot">Term of Use</Link> and the <Link to="/" className="forgot">Privacy Policy *</Link></label>
            
            <button type="submit" className="submit signup-button">{label}</button>
            <span className="title-text">Already have an account? <Link to="/auth" className="to-register">Login</Link></span>
            </form>
     </div> 
     )}