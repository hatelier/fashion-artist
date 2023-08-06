import { useEffect, useState } from 'react';
import { Header } from '../components/header';
// import { toast } from "react-toastify";
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import { useCookies } from 'react-cookie';
import { axiosInstance } from '../components/axiosInstance';

export const Account = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [cookies] = useCookies(["userId"]);
    const userId = cookies.userId;

    useEffect(() => {
      fetchUserData(userId);
    }, [userId]);

    const fetchUserData = async (userId: string) => {
      try {
      const response = await axiosInstance.get("/user/profile", { 
        params: {
          userID: userId
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

    const [isOpen, setIsOpen] = useState(false);

    /*const productPopup = () => {
      setIsOpen(!isOpen);
    };*/

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
             <div className="accounts-block">
              <div className='profile-container'>
             <div className="choose-plan">
                <div className="profile-header">
                    <div className="profile-header-text">Profile</div>
                    <div className="profile-save-button-phone">Save</div>
                </div>
             </div>
             <div className="profile-info-block">
              <div className="profile-info-horizontal">
                <div className="profile-info-item">
                    <div className="profile-info-item-heading">User Name</div>
                    <div className="profile-info-item-content">{firstName} {lastName}</div>
                </div>
                <div className="profile-info-item">
                    <div className="profile-info-item-heading">Email</div>
                    <div  className="profile-info-item-content">{email}</div>
                </div>
              </div>
              <div className="profile-info-horizontal">
                <div className="profile-info-item">
                    <div className="profile-info-item-heading">Occupation</div>
                    <div  className="profile-info-item-content">{occupation}</div>

                </div>
                <div className="profile-info-item">

                    <div className="profile-info-item-heading">Company</div>
                    <div  className="profile-info-item-content">{companyname}</div>

                </div>
                
              </div>
                <div className="profile-save-button">Save</div>
              
             </div>
             
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
                  <a href='/billing-history' className='billing-history'>View billing history</a>
                  <div className="account-cancel-upgrade">
                    <a className="account-upgrade-button" href="/subscription">Upgrade</a>
                    <div className="account-cancel-button">Cancel Plan</div>
                    
                </div>
                </div>
              </div>
              <div className="account-line"></div>
              <div className="account-buy-extra">
                <div className="account-extra-credit">
                  <div className="account-item-heading">
                    <div className="account-item-credit-heading">Credit</div>
                    <div className="account-item-credit-number">10000</div>
                  </div>
                  <a href='/credit-history' className='billing-history' style={{"textDecoration":"underline"}}>View credit history</a>
                </div>
                <div className="account-buy-credit">
                  <div className= "account-buy-credit-heading" >Quantity</div>
                  <div className="account-buy-credit-details">
                    <input type="text" name="" id="" className='account-credit-quantity' />
                    <a className="account-buy-button" href="/credit">Buy More</a>
                  </div>
                </div>
              </div>

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