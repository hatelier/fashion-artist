import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from 'react';

interface FormProps {
    otp: string[];
    setOTP: (otp: string[]) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onResend: () => void;
    email: string;
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
    const [email, setEmail] = useState("");

    const handleOTPChange = (index: number, value: string) => {
        const newOtpValues = [...otp];
        newOtpValues[index] = value;
        setOTP(newOtpValues);
      };
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const otpValue = otp.join("");
            const response = await axios.post("/password/validate-otp", {otp: otpValue});
            if(response.data.valid) {
                navigate('/new-password');
            } else if(response.data.message === 'Invalid or expired OTP') {
                window.alert("Invalid OTP");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onResend = async () => {
        try {
            await axios.post("/password/forgot/resend");
            window.alert("Email sent successfully");
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEmail = async () => {
        try {
            const response = await axios.get("/password/email");
            setEmail(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchEmail();
    }, []);
    return <Form otp={otp} setOTP={setOTP} onSubmit={onSubmit} onResend={onResend} email={email}/>;
};

const Form = ({
    otp, setOTP, onSubmit, onResend, email }: FormProps) => {
        const handleOTPChange = (index: number, value: string) => {
            const newOtpValues = [...otp];
            newOtpValues[index] = value;
            setOTP(newOtpValues);
          };   

    return (
        <div className="auth-container">
         <form className="form forgot-password reset-password" onSubmit={onSubmit}>
            <span className="title">Password Reset</span>
            <span className= "title-text">We sent a code to {email}</span>
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

            <span className= "account-text">Didn't recieve the email?{ " "}
                <button onClick={onResend} className="to-register">Click to resend</button>
            </span>
            <span className= "account-text">Back to <Link to="/auth" className="to-register">Login</Link></span>
         </form>
     </div> 
     )}