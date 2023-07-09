// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';


export const Subscription = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      
    // const userID = window.localStorage.getItem('userID');

    /*const response = await axios.get("/user/profile", { 
      params: {
        userID: userID
      },
    });*/

    // const userData = response.data;

    // setFirstName(userData.firstname);
    // setOccupation(userData.occupation);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };
  /*const logout = () => {
    setCookie('access_token',"");
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

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
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
         Subscription
         </div>
      </div>
      </div>
      <div className="subscription">
      <div className="choose-plan">
        Choose your plan
        </div>
      <div className="monthly-billing">
      <PinkSwitch {...label} defaultChecked />
      Monthly billing - switch to annual billing to save 10%
      </div>
      <div className="plans">
        <div className="basic plan-card">
            <div className="details">
                <div className="plan-header">
                    <div className="plan-title">Basic</div>
                    <div className="plan-cost">$99</div>
                </div>
                <div className='plan-content'>
                <div className="plan-info">
                For Individuals and Small business, with a up to 20 3d assess, and medium web traffic.
                </div>
            <div className="line"></div>
            <div className="plan-info-list">
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
            </div>
            <a className="buy-button" href="/payment">Buy Plan</a>
            </div>
            </div>
        </div>
        <div className="premium plan-card">
            <div className="details">
            <div className="plan-header">
                <div className="plan-title">Premium</div>
                <div className="plan-cost">$199</div>
            </div>
            <div className='plan-content'>
                <div className="plan-info">
                For Small Businesses, with a up to 50 3d assess, and medium web traffic.
                </div>
                <div className="line"></div>
                <div className="plan-info-list">
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                </div>
            <a className="buy-button" href="/payment">Buy Plan</a>
            </div>
            </div>
        </div>
        <div className="business plan-card">
            <div className="details">
              <div className="plan-header">
                <div className="plan-title">Business</div>
                <div className="plan-cost">$299</div>
              </div>
              <div className="plan-content">
                <div className="plan-info">
                For Businesses, with more than 50 3d assess, and medium web traffic.
                </div>
                <div className="line"></div>
                <div className="plan-info-list">
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                    <div className="plan-info-item"><span className="box"></span>Create up to 50 products</div>
                </div>

            <a className="buy-button" href="/payment">Buy Plan</a>
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