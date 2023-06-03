import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from 'react';

interface FormProps {
    otp: string[];
    setOTP: (otp: string[]) => void;
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
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();

    const handleOTPChange = (index: number, value: string) => {
        const newOtpValues = [...otp];
        newOtpValues[index] = value;
        setOTP(newOtpValues);
      };
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const otpValue = otp.join("");
            const response = await axios.post("http://localhost:3001/password/reset", {otp: otpValue});
            if(response.data.valid) {
                navigate('/new-password');
            }
            else {
                alert("Invalid OTP");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return <Form otp={otp} setOTP={setOTP} onSubmit={onSubmit}/>;
};

const Form = ({
    otp, setOTP, onSubmit }: FormProps) => {
        const handleOTPChange = (index: number, value: string) => {
            const newOtpValues = [...otp];
            newOtpValues[index] = value;
            setOTP(newOtpValues);
          };   

    return (
        <div className="auth-container">
         <form className="form forgot-password" onSubmit={onSubmit}>
            <span className="title">Password Reset</span>
            <span className= "title-text">We sent a code to abc12_wf@gmail.com</span>
            <div className="inputfield">
            {otp.map((value, index) => (
            <input
              key={index}
              type="number"
              maxLength={1}
              className="input-otp"
              value={value}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              required
            />
          ))}
            </div>
            
            <button type="submit" className="submit">Continue</button>

            <span className= "account-text">Didn't recieve the email? <Link to="/forgot-password" className="to-register">Click to resend</Link></span>
            <span className= "account-text">Back to <Link to="/auth" className="to-register">Login</Link></span>
         </form>
     </div> 
     )}