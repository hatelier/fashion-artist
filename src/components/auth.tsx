import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance, setAuthorizationHeader} from "./axiosInstance";
import { useCookies } from "react-cookie";

const TokenVerification = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(["access_token", "userId"]);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const token = cookies.access_token; // Get the access_token from cookies
                const userId = cookies.userId; // Get the userId from cookies
                setAuthorizationHeader(token, userId); // Set authorization headers
                await axiosInstance.get('/auth/check');
            } catch (error) {
                console.error(error);
                navigate('/auth');
            }
        };
        verifyToken();
    }, [cookies.access_token, cookies.userId, navigate]);
    return null;
};

export default TokenVerification;