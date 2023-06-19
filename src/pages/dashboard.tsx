import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/header';
import { toast } from "react-toastify";

export const Dashboard = () => {
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
    };
    const productPopupCancel = () => {
      setIsOpen(!isOpen);
    };

    const [isElementVisible, setElementVisible] = useState(false);

    const handleClick = () => {
      const element = document.querySelector('#sidenav') as HTMLElement;
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };

    return ( 
    <div className='home-container'>
                 {isOpen && (
                  <div className="product-popup">
                  <div className="product-popup-main">
                  <label htmlFor="" className='product-popup-label'>Product Name</label>
                  <input type="text" placeholder='New Product' className='product-popup-input'/>
                  <div className='product-popup-configurable'><input type="checkbox" /> <span>Create Configurable Product</span></div>
                  </div>
                  <div className='product-popup-buttons'>
                    <button className='product-popup-cancel' onClick={productPopupCancel}>Cancel</button>
                    <button className='product-popup-create'>Create</button>
                    </div>
                </div> 
                )}
    <section >
      <Header />
      <div className='content'>
        <div className='sidenav' id='sidenav'>
          <div className='upper-menu'>
            <div className="userblock">
              <div className="current-user">
                <div className="avatar">
                  <img src={require('../assets/pngs/user-icon.png')} alt="user-icon" />
                </div>
                <div className="user-details">
                  <div className="username">{firstName}</div>
                  <div className="occupation">{occupation}</div>
                </div>
                <div className="arrow">
                  <img src={require('../assets/pngs/down.png')} alt="" />
                </div>
              </div>
              <div className="new-team">
                <img src={require('../assets/pngs/new-team.png')} alt="" />
                <div>New Team</div>
              </div>
            </div>
            <div>
              <button className="add-product" onClick={productPopup}>
                <img src={require('../assets/pngs/plus.png')} alt="add new product" />
                New Product
              </button>
            </div>
            <div className='submenu'>
              <div className='item'>
              <a href="/">Dashboard</a>
              </div>
              <div className='item'>
              <a href="/products">Products</a>
              </div>
              <div className='item'>
              <a href="/analytics">Analytics</a>
              </div>
              <div className='item'>
              <a href="/showroom">Showroom</a>
              </div>
              <div className='item'>
              <a href="/3d-fashion-lab">3D Fashion Lab</a>
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
              <img src={require('../assets/pngs/resources.png')} alt="resources" /> Resources <img src={require('../assets/pngs/up.png')} alt="toggle" className="toggle" />
            </div>
          </div>
        </div>
        <div className='main'>
          <div className='text'>
            <div className='welcome'>
               Hello, welcome back! {firstName}
            </div>
            <div className='dashboard'>
            Dashboard
            </div>
          </div>
          <div className='insights'>
            <div className='info'>
              <div className='info-name'>Total Products</div>
              <div className='info-value'>290</div>
              <div className='info-view'><a className='info-view-link' href="/products">See all Products</a></div>
            </div>
            <div className='info'>
              <div className='info-name'>Total 3d view</div>
              <div className='info-value'>500</div>
              <div className='info-view'><a className='info-view-link' href="/analytics">View analytics</a></div>
            </div>
            <div className='info'>
              <div className='info-name'>Total AR view</div>
              <div className='info-value'>870</div>
              <div className='info-view'><a className='info-view-link' href="/analytics">See analytics report</a></div>
            </div>
          </div>
          <div className='products'>
            <div className='recent-products'>
              Recent Products
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};
