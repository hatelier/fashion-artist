import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Sidenav = () => {
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
    const [isOpen, setIsOpen] = useState(false);
    const productPopup = () => {
      setIsOpen(!isOpen);
      console.log("popopopo");

    };

    const [isElementVisible, setElementVisible] = useState(false);

    const handleClick = () => {
      const element = document.querySelector('#sidenav') as HTMLElement;
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };

    return ( 
        <div className='sidenav' id='sidenav'>
          <div className='upper-menu'>
            <div className='submenu'>
              <div className='item'>
              <a href="/"><img src={require('../assets/pngs/sidenav-dashboard.png')} alt="" /><span>Dashboard</span></a>
              </div>
              <div className='item'>
              <a href="/products"><img src={require('../assets/pngs/sidenav-analytics.png')} alt="" /><span>Products</span></a>
              </div>
              <div className='item'>
              <a href="/analytics"><img src={require('../assets/pngs/sidenav-products.png')} alt="" /><span>Analytics</span></a>
              </div>
              <div className='item'>
              <a href="/showroom"><img src={require('../assets/pngs/sidenav-showroom.png')} alt="" /><span>Showroom</span></a>
              </div>
              <div className='item'>
              <a href="/3d-fashion-lab"><img src={require('../assets/pngs/sidenav-fashionlab.png')} alt="" /><span>3D Fashion Lab</span></a>
              </div>
            </div>
          </div>  
          <div className="dropdown resource-menu">
            <div className="dropdown-content">
              <a href="#"><img src={require('../assets/pngs/tutorial.png')} alt="resources" /> Tutorials </a>
              <a href="#"><img src={require('../assets/pngs/documentation.png')} alt="resources" /> Documentation </a>
              <a href="#"><img src={require('../assets/pngs/api-plugins.png')} alt="resources" /> API & Plugins </a>
              <a href="#"><img src={require('../assets/pngs/feedback.png')} alt="resources" /> Feedback </a>
            </div>
            <div className="resources">
              <img src={require('../assets/pngs/sidenav-resources.png')} alt="resources" /> Resources <img src={require('../assets/pngs/down-white.png')} alt="toggle" className="toggle" />
            </div>
          </div>
        </div>
);
};