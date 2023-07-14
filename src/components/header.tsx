import { useEffect,/*, ChangeEvent*/ 
useState} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch, { SwitchProps } from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import DarkMode from '../components/darkmode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axiosInstance from './axiosInstance';





export const Header = () => {
    const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    useEffect(() => {
      fetchUserData();
    }, []);

    const handleBellClick = () => {
      setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };

    const fetchUserData = async () => {
      try {
      const userID = window.localStorage.getItem('userID');
      const response = await axiosInstance.get("/user/profile", { 
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
      setCookie('access_token',"", {path: '/'});
      localStorage.removeItem('access_token');
      localStorage.removeItem('userID');
      navigate("/auth");
    }

    // const [isElementVisible, setElementVisible] = useState(false);

    const handleClick = () => {
      const element = document.querySelector('#sidenav') as HTMLElement;
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };

    /*const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#D31027' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#D31027' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#D31027' : '#D31027',
        borderRadius: 20 / 2,
      },
    }));*/

      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
        }
      }, []);
    
      /*const switchTheme = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      };*/


      // Dropdown component  starts

      
const NotificationItem = ()=>{
  return(
      <div className='notification-dropdown-item'>
          <div className='notification-dropdown-item-1'>
              <div>Congrats! your project is published</div>
              <img src={require('../assets/pngs/dustbin.png')} alt="delete" className='sidenav-img'/>
          </div>
          <div className='notification-dropdown-timestamp'>
              <p>04/07/2023</p>
              <p>02:00 PM</p>
          </div>
      </div>
  )
}



const NotificationDropDown  = () => {

  return(
      <div className='notification-dropdown'>
          <div className="notification-dropdown-heading">
              <div>Notifications</div>
              <div><img src={require('../assets/pngs/cancel.png')} alt="" className='sidenav-img' onClick={ handleDialogClose }/></div>
          </div>
          <div className="notification-dropdown-content">
              <NotificationItem/>
              <NotificationItem/>
              <NotificationItem/>
              <NotificationItem/>
              <NotificationItem/>
              <NotificationItem/>
          </div>
          <div className="notification-dropdown-action">
              <div className='notification-dropdown-buttons'>
                  <input type="checkbox" />
                  Delete All
              </div>
              <div className='notification-dropdown-link'>
                  <a href='/notification'>View all notification</a>
              </div>
          </div>
      </div>
  );
};



      // Dropdown component ends 

    return ( 
      <header className="header">
        <div>
        <img className='sidemenu-toggle' src={require('../assets/pngs/sidenav-toggle.png')} onClick={handleClick} alt="" />
        <a href="/">
        <img
        src={require('../assets/pngs/mxlogo-2.png')}
        alt="mxlogo"
        className="mx-logo"
        />
        </a>
        </div>
        <div className='header-right'>
      <DarkMode />
      <NotificationsIcon className='bell-icon' style={{ color: 'white' }} onClick={handleBellClick}/>
      {isDialogOpen && (
        // <div className="dialog">
          
        //   <button onClick={handleDialogClose}>Close</button>
        // </div>
        <NotificationDropDown/>
        
      )}
      <div className="dropdown-top">
      <div className='header-account dropbtn'>
        <div>
          <img src={require('../assets/pngs/Profile photo.png')} alt="" />
        </div>
        <div className='header-account-text'>
          <div className='header-account-username'>{firstName}</div>
          <div className='header-account-occupation'>{occupation}</div>
        </div>
        <div>
            <img src={require('../assets/pngs/down-white.png')} alt="" />
        </div>
      </div>
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

       <a href="/help-desk">
       <img
        src={require('../assets/pngs/headset-help-icon.png')}
        alt="help-icon"
      />Help Desk</a>
 
      {!cookies.access_token ? (
        <button onClick={logout}>
          <img src={require('../assets/pngs/logout-icon.png')} alt="logout-icon" />
          Logout
        </button>
        ) : (
        <a href="/auth">
        <img src={require('../assets/pngs/logout-icon.png')} alt="login-icon" />
        Login/Register
        </a>
        )}
      </div>
      </div>
      </div>
      </header>
);
};