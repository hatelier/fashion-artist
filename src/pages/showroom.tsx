import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';

export const Showroom = () => {
  const [firstName, setFirstName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

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
                 Showroom
               </div>
             </div>
             </div>
             <div className="subscription">
             <div className="choose-plan">
                Manage Showroom
             </div>
             <div className="showroom-search-add">
                <input type="text" className="showroom-search" placeholder="search by showroom"/>
                <a href="/add-showroom" className="add-product">
                    <img src={require('../assets/pngs/plus.png')} alt="add new showroom" />
                    Show room
                </a>
             </div>
               <table className="showroom-block">
                <tr className="showroom-heading-row">
                  <th className="showroom-heading-cell"><div className="showroom-heading-box"></div></th>
                  <th className="showroom-heading-cell">Logo</th>
                  <th className="showroom-heading-cell">Showroom Name</th>
                  <th className="showroom-heading-cell">Date Updated</th>
                  <th className="showroom-heading-cell">Date Created</th>
                  <th className="showroom-heading-cell">Products Counts</th>
                  <th className="showroom-heading-cell">Status</th>
                  <th className="showroom-heading-cell">Actions</th>
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
              </table>
            </div>
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
);
};