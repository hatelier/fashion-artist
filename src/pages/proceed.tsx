import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TokenVerification from "../components/auth";

interface FormProps {
    email: string;
    setEmail: (email: string) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    message: string;
}


export const Proceed = () => {
    return (
        <div className="auth">
        <div className="logo-container">
          <img className="logo" src={"/mxlogo.png"} alt="logo" />  
        </div>
        <div className="login-container">
          <Register />  
        </div>
        <div className="image-container proceed-img-container">
            <img className="main-image proceed-img" src = "mq.png" alt = "mq" />
         </div>
        </div>
    ); 
};

const Msg = () => (
    <div className="login-popup">
    <div><img src={require('../assets/pngs/tick.png')} alt="" /></div>
    <div>A reset code has been sent to your email address. Please check you Email</div>
    </div>
    
  )

    const displayMsg = () => {
      toast(<Msg />, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }) 
    }

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
            const response = await axios.post("/password/forgot", {email});
            // setMessage(response.data.message);
            if(response.data.message === "User not found") {
                toast.error("User not found");
            } else {
                displayMsg();
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
            <div className= "proceed-text">Apologies! Mobile access for MomentumX editor is limited, but you can view and share your product. Full editing experience is available on laptops/desktops. Improvements for mobile compatibility are underway. Thanks for your patience!</div>

            <a href="/"><button className="submit proceed-button">Proceed</button></a>

         </form>
         {message && <p>{message}</p>}
         <TokenVerification />
     </div> 
     )}