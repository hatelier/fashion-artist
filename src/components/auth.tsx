import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const TokenVerification = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axiosInstance.get('/auth/check');
            } catch (error) {
                console.error(error);
                navigate('/auth');
            }
        };
        verifyToken();
    }, [navigate]);
    return null;
};

export default TokenVerification;