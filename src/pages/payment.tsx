// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';


export const Payment = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
    // const navigate = useNavigate();
    // const [firstName, setFirstName] = useState("");
    // const [occupation, setOccupation] = useState("");

    useEffect(() => {
      fetchUserData();
    }, []);

    const fetchUserData = async () => {
      /*try {
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
      }*/
    };

    /*const logout = () => {
      setCookie('access_token',"")
      window.localStorage.removeItem("userID");
      navigate("/auth");
    }*/

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
               Payment
               </div>
             </div>
             </div>
             <div className="subscription">
             <div className="choose-plan payment-heading">
               Payment
             </div>
             <div className="payment">
               <div className="payment-details">
                  <div className="payment-details-block">
                    <div className="payment-details-brief">
                      <div className="try-momentumx">Try MomentumX Platform</div>
                      <div className="days-free">14 days free</div>
                      <div className="per-month">Then $ 99 per month</div>
                    </div>
                    <div className="payment-details-again">
                      <div className="try-momentumx-again">MomentumX Platform</div>
                      <div className="days-months">
                        <div className="days-free-again">14 days free</div>
                        <div className="per-month-again">$99.00 / month after</div>
                      </div>
                    </div>
                    <div className="payment-details-info">
                      <div className="payment-info-item bold"><span className="alignleft">Subtotal</span><span className="alignright">$99.00</span></div>
                      <div className="payment-info-item"><span className="alignleft">VAT (19%)</span><span className="alignright">$18.01</span></div>
                      <div className="payment-info-item"><span className="alignleft">Total after trial</span><span className="alignright">$117.01</span></div>
                      <div className="payment-info-item bold"><span className="alignleft">Total after today</span><span className="alignright">$0.00</span></div>
                    </div>
                    <a className="payment-back-button" href="/subscription"><img src={require('../assets/pngs/left.png')} alt="back" />Back</a>
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