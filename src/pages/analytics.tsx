// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';


export const Analytics = () => {
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

    // const productPopup = () => {
    //   setIsOpen(!isOpen);
    // };

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
                 <div className="analytics-header">
                    <span>Analytics</span>
                    <button onClick={()=>{}} className="analytics-download-button">Download</button>
                 </div>
               </div>
             </div>
             </div>
             <div className="subscription">
               <div className="analytics-block">
                 <div className="analytics-report-block">
                   <div className="analytics-report">
                     <div className="analytics-report-header">
                        <div className="analytics-report-header-text">Report</div>
                        <div className="analytics-report-header-buttons">
                            <button onClick={()=>{}}>Product Report</button>
                            <button onClick={()=>{}}>Reset</button>
                        </div>
                     </div>
                   </div>
                   <div className="analytics-report-pagination">

                   </div>
                 </div>
                 <div className="analytics-secondary-block">
                  <div className="analytics-secondary-top">
                    <div className="analytics-3d-views">Total 3d views</div>
                    <div className="analytics-stats">
                        <div className="analytics-user-engagement">
                            <div className="analytics-stats-heading">All User Engagement</div>
                            <div className='analytics-stats-main'>
                                <img src={require('../assets/pngs/analytics-user.png')} alt="" />
                                <span className='analytics-stats-number'>70%</span>
                            </div>
                        </div>
                        <div className="analytics-average-interaction">
                            <div className="analytics-stats-heading">No. of Average Interaction</div>
                            <div>
                                <img src="" alt="" />
                                <span className='analytics-stats-number'>70</span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="analytics-secondary-bottom">
                    <div className="analytics-most-viewed">Most viewed product</div>
                    <div className="analytics-ar-views">Total AR views</div>
                  </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
};