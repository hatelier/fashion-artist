import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';

import { toast } from "react-toastify";
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';

export const Account = () => {
    const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [companyname, setCompanyName] = useState("");

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
      setLastName(userData.lastname);
      setCompanyName(userData.companyname);
      setEmail(userData.email);
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
        <Sidenav />
           <div className='main'>
           <div className="main-header">
             <div className='text'>
               <div className='dashboard'>
                 Account
               </div>
             </div>
             </div>
             <div className="subscription">
             <div className="choose-plan">
                <div className="profile-header">
                    <div className="profile-header-text">Profile</div>
                </div>
             </div>
             <div className="profile-info-block">
              <div className="profile-info-horizontal">
                <div className="profile-info-item">
                  <img src={require('../assets/pngs/username.png')} alt="" />
                  <div>
                    <div className="profile-info-item-heading">User Name</div>
                    <div>{firstName} {lastName}</div>
                  </div>
                </div>
                <div className="profile-info-item">
                  <img src={require('../assets/pngs/email.png')} alt="" />
                  <div>
                    <div className="profile-info-item-heading">Email</div>
                    <div>{email}</div>
                  </div>
                </div>
              </div>
              <div className="profile-info-horizontal">
                <div className="profile-info-item">
                  <img src={require('../assets/pngs/occupation.png')} alt="" />
                  <div>
                    <div className="profile-info-item-heading">Occupation</div>
                    <div>{occupation}</div>
                  </div>
                </div>
                <div className="profile-info-item">
                  <img src={require('../assets/pngs/company.png')} alt="" />
                  <div>
                    <div className="profile-info-item-heading">Company</div>
                    <div>{companyname}</div>
                  </div>
                </div>
              </div>
             </div>
             <div className="profile-save-button">Save<img src={require('../assets/pngs/save.png')} alt="" /></div>
             <div className="choose-plan account-subscription">Subscription</div>
             <div className="account-subscription-details">
              <div className="account-current-details">
                <div className="account-current-plan">
                  <div className="account-item-heading">Current Plan</div>
                  <div className="account-item-text">Current Plan (Active)</div>
                </div>
                <div className="account-current-billing">
                  <div className="account-item-heading">Current billing period</div>
                  <div className="account-item-text">21/02/2023 - 21/02/2024</div>
                </div>
              </div>
              <div className="account-monthly-credits">
                <div className="account-item-heading">Rendering monthly credits </div>
                <div className="account-item-text">98/100</div>
              </div>
              <div className="account-buy-extra">
                <div className="account-extra-credit">
                  <div className="account-item-heading">Rendering extra credits</div>
                  <div className="account-item-text">10000</div>
                </div>
                <div className="account-buy-credit">
                  <div className="account-credit-quantity">
                    <div className="account-credit-quantity-text">Quantity</div>
                    <div className="account-credit-quantity-number">
                      <div>1</div>
                    </div> 
                  </div>
                  <a className="account-buy-button" href="/credit">Buy More</a>
                </div>
              </div>
              <div className="account-products-viewer">
                <div className="account-products">
                  <div className="account-item-heading">Products</div>
                  <div className="account-item-text">98/100</div>
                </div>
                <div className="account-viewer">
                  <div className="account-item-heading">Viewer page views</div>
                  <div className="account-item-text">100000/100000</div>
                </div>
              </div>
              <div className="account-cancel-upgrade">
                <div className="account-cancel-button">Cancel Plan</div>
                <a className="account-upgrade-button" href="/subscription">Upgrade</a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
);
};