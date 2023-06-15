import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';

import { toast } from "react-toastify";

export const FashionLab = () => {
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
  const Msg = () => (
    <div className="fashionlab-popup">
    <div className='fashionlab-popup-heading'>Thank you for your interest in our 3D Fashion Lab!</div>
    <div className='fashionlab-popup-text'>We have recieved your request and will review it as soon as possible. We will get back to you shortly with our response.</div>
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
    const [isOpen, setIsOpen] = useState(false);
    const productPopup = () => {
      setIsOpen(!isOpen);
    };
    const productPopupCancel = () => {
      setIsOpen(!isOpen);
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
               <div className='dashboard'>
               3D Fashion Lab
               </div>
             </div>
             <div className="subscription">
             <div className="choose-plan">
               Fashion Lab
             </div>
             <div className="fashion-block">
               <div className="fashion-details-block">
                 <div className="fashion-welcome-text">
                   Welcome to our fashion lab where you get all your 3D fashion items you need
                 </div>
                 <div className="fashion-details">
                   <div className="fashion-details-item">
                      <label htmlFor="" className="fashion-item-label">Contact Name</label>
                      <input type="text" className="fashion-item-input" placeholder="Enter contact name"/>
                   </div>
                   <div className="fashion-details-item">
                      <label htmlFor="" className="fashion-item-label">Contact Email</label>
                      <input type="text" className="fashion-item-input" placeholder="Enter contact email address"/>
                   </div>
                   <div className="fashion-details-item">
                      <label htmlFor="" className="fashion-item-label">Design Name</label>
                      <input type="text" className="fashion-item-input" placeholder="Enter your design name"/>
                   </div>
                   <div className="fashion-details-item">
                      <label htmlFor="" className="fashion-item-label">Tell us about your design</label>
                      <textarea rows={4} className="fashion-item-input about-design" placeholder="Tell us more about your design like the idea, the inspiration, the story board and all we need to know"/>
                   </div>
                 </div>
                 <div className="fashion-need-cad"><input type="checkbox" name="save-detail" id="save-details"/>Need the CAD or pattern files for production?</div>
               </div>
               <div className="fashion-upload-block">
                  <div className="fashion-upload-heading">
                    To bring your fashion designs to life in 3D
                  </div>
                  <div className="fashion-upload-text">
                    Upload sketches, technical drawings, and mood boards to help us understand your vision and create an accurate 3D model of your fashion items. Thank you!
                  </div>
                  <div className="fashion-upload-area">
                    <div>
                        <img src={require('../assets/pngs/fashionlab-upload.png')} alt="" />
                    </div>
                    <div>
                      Upload your design here
                    </div>
                  </div>
                  <button className="fashion-upload-button" onClick={displayMsg}>Upload Design</button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
};