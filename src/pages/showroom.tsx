// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import { toast } from 'react-toastify';

export const Showroom = () => {
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();

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
    setCookie('access_token');
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

  const [isSharing, setIsSharing] = useState(false);
  const sharePopup = () => {
    setIsSharing(!isSharing);
  };

  const sharePopupCancel = () => {
    setIsSharing(!isSharing);
  };

  const DeleteShowroomPopup = ()=>{
    return(
      <div className="team-delete-popup">
        <img src={require('../assets/pngs/warning.png')} alt="" />
        <div className='team-delete-popup-msg'>
        <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
        <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete this Showroom</p>
        <button className="team-popup-btn" style={{"border":"none"}} onClick={handleDeleteShowroom}>Proceed</button>
        </div>
      </div>
    )
  }
  const handleDeleteShowroomPopup = () =>{
    toast(<DeleteShowroomPopup />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    className :' team-delete-toast'
  }) 
  }
  const DeleteShowroomDone = ()=>{
    return (<div className="invite-member-popup">
    <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
    <div>You have deleted this showroom successfully</div>
</div>)
  }

  const handleDeleteShowroom = ()=>{
    toast(<DeleteShowroomDone/>, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  //   theme : 'light',
    className : 'invite-member-toast'
  }) 
  }

  const DeleteShowroomAllPopup = ()=>{
    return(
      <div className="team-delete-popup">
        <img src={require('../assets/pngs/warning.png')} alt="" />
        <div className='team-delete-popup-msg'>
        <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
        <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete all Showrooms</p>
        <button className="team-popup-btn" style={{"border":"none"}} onClick={handleDeleteShowroomAll}>Proceed</button>
        </div>
      </div>
    )
  }
  const handleDeleteShowroomAllPopup = () =>{
    toast(<DeleteShowroomAllPopup />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    className :' team-delete-toast'
  }) 
  }
  const DeleteShowroomAllDone = ()=>{
    return (<div className="invite-member-popup">
    <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
    <div>You have deleted all showrooms successfully</div>
</div>)
  }

  const handleDeleteShowroomAll = ()=>{
    toast(<DeleteShowroomAllDone/>, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  //   theme : 'light',
    className : 'invite-member-toast'
  }) 
  }
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
                {isSharing && (
        <div className="sharing-popup">
          <div className="sharing-close-container">
            <img className="sharing-close-button" src={require('../assets/pngs/report-cross.png')} alt="" onClick={sharePopupCancel}/>
          </div>
          <div className="sharing-header">
            <div className="sharing-heading">
                Share
            </div>
            <div className="sharing-text">
            Nulla quam suspendisse tincidunt odio. Neque leo egestas leo interdum cum porttitor sed.
            </div>
          </div>
          <div className="sharing-link-copy">
            <img src={require('../assets/pngs/attach.png')} alt="" />
            <div className="sharing-link-text">https://www.momentumx.com/allproducts/</div>
            <button className="sharing-copy">Copy</button>
          </div>
          <div className="share-via">
            <div className="share-via-text">Share Via:</div>
            <div className="share-via-icons">
              <button className="share-via-button"><img src={require('../assets/pngs/whatsapp.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/instagram.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/linkedin.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/twitter.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/facebook.png')} alt="" /></button>
            </div>
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
                 Showroom
               </div>
             </div>
             </div>
             <div className="subscription">
             <div className="templates-input-group">
                <input type="text" className="templates-input" placeholder="search by showroom"/>
                <a href="/add-showroom" className="add-product">
                    <img src={require('../assets/pngs/add.png')} alt="add new showroom" />
                    Show room
                </a>
             </div>
             <div className='showroom'>
              <div className='showroom-heading'>
                  <div className="showroom-heading-cell"><div className="showroom-heading-box"></div></div>
                  <div className="showroom-heading-cell">Logo</div>
                  <div className="showroom-heading-cell">Showroom Name</div>
                  <div className="showroom-heading-cell">Date Updated</div>
                  <div className="showroom-heading-cell">Date Created</div>
                  <div className="showroom-heading-cell">Products Counts</div>
                  <div className="showroom-heading-cell">Status</div>
                  <div className="showroom-heading-cell">Actions</div>
                  <div className="showroom-heading-cell"><button className='showroom-delete-all' onClick={handleDeleteShowroomAllPopup}><img className='sidenav-img' src={require('../assets/pngs/dustbin.png')} alt="" /></button></div>
              </div>
              <div className='showroom-row'>
                <div className="showroom-cell"><div className="showroom-box"></div></div>
                <div className="showroom-cell"><div className="showroom-logo"></div></div>
                <div className="showroom-cell">Showroom Name</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">3</div>
                <div className="showroom-cell"><a className='showroom-upload-status' href="/add-showroom"><img src={require('../assets/pngs/upload.png')} alt="" /></a></div>
                <div className="showroom-cell"><div>
                        <a href="/add-showroom" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <button className="showroom-action-buttons" onClick={sharePopup}><img src={require('../assets/pngs/showroom-share.png')} alt="" /></button>
                        
                    </div>
                    </div>
                    <div className="showroom-cell"><button className="showroom-action-buttons" onClick={handleDeleteShowroomPopup}><img src={require('../assets/pngs/dustbin.png')} alt="" /></button></div>
              </div>
              <div className='showroom-row'>
                <div className="showroom-cell"><div className="showroom-box"></div></div>
                <div className="showroom-cell"><div className="showroom-logo"></div></div>
                <div className="showroom-cell">Showroom Name</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">3</div>
                <div className="showroom-cell"><a className='showroom-upload-status' href="/add-showroom"><img src={require('../assets/pngs/upload.png')} alt="" /></a></div>
                <div className="showroom-cell"><div>
                        <a href="/add-showroom" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <button className="showroom-action-buttons" onClick={sharePopup}><img src={require('../assets/pngs/showroom-share.png')} alt="" /></button>
                        
                    </div>
                    </div>
                    <div className="showroom-cell"><button className="showroom-action-buttons" onClick={handleDeleteShowroomPopup}><img src={require('../assets/pngs/dustbin.png')} alt="" /></button></div>
              </div>
              <div className='showroom-row'>
                <div className="showroom-cell"><div className="showroom-box"></div></div>
                <div className="showroom-cell"><div className="showroom-logo"></div></div>
                <div className="showroom-cell">Showroom Name</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">3</div>
                <div className="showroom-cell"><a className='showroom-upload-status' href="/add-showroom"><img src={require('../assets/pngs/upload.png')} alt="" /></a></div>
                <div className="showroom-cell"><div>
                        <a href="/add-showroom" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <button className="showroom-action-buttons" onClick={sharePopup}><img src={require('../assets/pngs/showroom-share.png')} alt="" /></button>
                        
                    </div>
                    </div>
                    <div className="showroom-cell"><button className="showroom-action-buttons" onClick={handleDeleteShowroomPopup}><img src={require('../assets/pngs/dustbin.png')} alt="" /></button></div>
              </div>
              <div className='showroom-row'>
                <div className="showroom-cell"><div className="showroom-box"></div></div>
                <div className="showroom-cell"><div className="showroom-logo"></div></div>
                <div className="showroom-cell">Showroom Name</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">20/05/2023</div>
                <div className="showroom-cell">3</div>
                <div className="showroom-cell"><a className='showroom-upload-status' href="/add-showroom"><img src={require('../assets/pngs/upload.png')} alt="" /></a></div>
                <div className="showroom-cell"><div>
                        <a href="/add-showroom" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <button className="showroom-action-buttons" onClick={sharePopup}><img src={require('../assets/pngs/showroom-share.png')} alt="" /></button>
                        
                    </div>
                    </div>
                    <div className="showroom-cell"><button className="showroom-action-buttons" onClick={handleDeleteShowroomPopup}><img src={require('../assets/pngs/dustbin.png')} alt="" /></button></div>
              </div>
             </div>
               {/* <table className="showroom-block">
                <tr className="showroom-heading-row">
                  <th className="showroom-heading-cell"><div className="showroom-heading-box"></div></th>
                  <th className="showroom-heading-cell">Logo</th>
                  <th className="showroom-heading-cell">Showroom Name</th>
                  <th className="showroom-heading-cell">Date Updated</th>
                  <th className="showroom-heading-cell">Date Created</th>
                  <th className="showroom-heading-cell">Products Counts</th>
                  <th className="showroom-heading-cell">Status</th>
                  <th className="showroom-heading-cell">Actions</th>
                  <th className="showroom-heading-cell"><img src={require('../assets/pngs/dustbin.png')} alt="" /></th>
                </tr> */}

                {/* Turn this into a component, import and map based on API Data */}
                {/* <tr className="showroom-row">
                  <td className="showroom-cell"><div className="showroom-box"></div></td>
                  <td className="showroom-cell"><div className="showroom-logo"></div></td>
                  <td className="showroom-cell">Showroom Name</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">3</td>
                  <td className="showroom-cell">
                    
                    <a className='showroom-upload-status' href=""><img src={require('../assets/pngs/upload.png')} alt="" /></a></td>
                  <td className="showroom-cell">
                    <div>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/group.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/dustbin.png')} alt="" /></a>
                    </div>
                  </td>
                </tr>

                <tr className="showroom-row">
                  <td className="showroom-cell"><div className="showroom-box"></div></td>
                  <td className="showroom-cell"><div className="showroom-logo"></div></td>
                  <td className="showroom-cell">Showroom Name</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">3</td>
                  <td className="showroom-cell"><a className='showroom-upload-status' href=""><img src={require('../assets/pngs/upload.png')} alt="" /></a></td>
                  <td className="showroom-cell">
                    <div>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/group.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/dustbin.png')} alt="" /></a>
                    </div>
                  </td>
                </tr>

                <tr className="showroom-row">
                  <td className="showroom-cell"><div className="showroom-box"></div></td>
                  <td className="showroom-cell"><div className="showroom-logo"></div></td>
                  <td className="showroom-cell">Showroom Name</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">3</td>
                  <td className="showroom-cell"><a className='showroom-upload-status' href=""><img src={require('../assets/pngs/upload.png')} alt="" /></a></td>
                  <td className="showroom-cell">
                    <div>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/group.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/dustbin.png')} alt="" /></a>
                    </div>
                  </td>
                </tr>

                <tr className="showroom-row">
                  <td className="showroom-cell"><div className="showroom-box"></div></td>
                  <td className="showroom-cell"><div className="showroom-logo"></div></td>
                  <td className="showroom-cell">Showroom Name</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">20/05/2023</td>
                  <td className="showroom-cell">3</td>
                  <td className="showroom-cell"><a className='showroom-upload-status' href=""><img src={require('../assets/pngs/upload.png')} alt="" /></a></td>
                  <td className="showroom-cell">
                    <div>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/edit.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/group.png')} alt="" /></a>
                        <a href="" className="showroom-action-buttons"><img src={require('../assets/pngs/dustbin.png')} alt="" /></a>
                    </div>
                  </td>
                </tr> */}
{/* 
              </table> */}
            </div>
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
);
};