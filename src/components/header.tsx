import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Header = () => {
  const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [occupation, setOccupation] = useState("");

    useEffect(() => {
      fetchUserData();
    }, []);

    const fetchUserData = async () => {
      try {
      const userID = window.localStorage.getItem('userID');
      const response = await axios.get("/user/profile", { 
        params: {
          userID: userID
        },
      });
      const userData = response.data;

      setFirstName(userData.firstname);
      setOccupation(userData.occupation);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    const logout = () => {
      setCookie('access_token',"")
      window.localStorage.removeItem("userID");
      navigate("/auth");
    }

    const [isElementVisible, setElementVisible] = useState(false);

    const handleClick = () => {
      const element = document.querySelector('#sidenav') as HTMLElement;
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };

    return ( 
      <header className="header">
        <img className='sidemenu-toggle' src={require('../assets/pngs/sidenav-toggle.png')} onClick={handleClick} alt="" />
        <img
        src={require('../assets/pngs/mx-logo.png')}
        alt="mxlogo"
        className="mx-logo"
      />
      <img
        src={require('../assets/pngs/bell-icon.png')}
        alt="bell-icon"
        className="bell-icon"
      />
      <div className="dropdown-top">
      <img
        src={require('../assets/pngs/small-avatar-icon.png')}
        alt="small-avatar-icon"
        className="small-avatar-icon dropbtn"
      />
       <div className="dropdown-top-content">
       <a href="/account">
       <img
        src={require('../assets/pngs/account-icon.png')}
        alt="account-icon"
      /> Account</a>
       <a href="/teams">
       <img
        src={require('../assets/pngs/teams-icon.png')}
        alt="teams-icon"
      />Teams</a>
       <a href="#">
       <img
        src={require('../assets/pngs/headset-help-icon.png')}
        alt="help-icon"
      />Help Desk</a>
      {!cookies.access_token ? (
        <a href="/auth">
        <img src={require('../assets/pngs/logout-icon.png')} alt="login-icon" />
        Login/Register
        </a>
        ) : (
        <a href="#" onClick={logout}>
        <img src={require('../assets/pngs/logout-icon.png')} alt="logout-icon" />
        Logout
        </a>
        )}
      </div>
      </div>
      </header>
);
};