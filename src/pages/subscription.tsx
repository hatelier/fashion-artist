import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Subscription = () => {
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

    return ( 
    <div className='home-container'>
    <section >
      <header className="header">
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
      <div className='content'>
      <div className='sidenav'>
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
              <button className="add-product">
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
              <a href="#">Analytics</a>
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
         Subscription
         </div>
      </div>
      <div className="subscription">
      <div className="choose-plan">
        Choose your plan
        </div>
      <div className="monthly-billing">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      Monthly billing - switch to annual billing to save 10%
      </div>
      <div className="plans">
        <div className="basic plan-card">
            <div className="details">
                <div className="plan-title">Basic</div>
                <div className="plan-cost">99</div>
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
            </div>
            <a className="buy-button" href="/payment">Buy Plan</a>
        </div>
        <div className="premium plan-card">
            <div className="details">
                <div className="plan-title">Premium</div>
                <div className="plan-cost">199</div>
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
            </div>
            <a className="buy-button" href="/payment">Buy Plan</a>
        </div>
        <div className="business plan-card">
            <div className="details">
                <div className="plan-title">Business</div>
                <div className="plan-cost">299</div>
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
            </div>
            <a className="buy-button" href="/payment">Buy Plan</a>
        </div>
      </div>
     </div>
     </div>
     
     
      </div>
    </section>
  </div>
);
};