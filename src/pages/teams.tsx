// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';


export const Teams = () => {
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
    
      //This part //Token from cookies
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
                    <span>Teams</span>
                    <button onClick={()=>{
                      //fetch from API
                    }} className="analytics-download-button">Create Team</button>
                 </div>
               </div>
             </div>
             </div>
             <div className="subscription">
                <div className="teams-all-block">
                    <div className="team-block">
                        <div className="team-header">
                            <span className="team-name-edit">
                                <span className="team-name">MomentumX team</span>
                                <img className="team-edit-button" src={require('../assets/pngs/edit.png')} alt="" />
                            </span>
                            <span className="team-add-delete">

                                <button onClick={()=>{

                                }} className="team-add">
                                  <img className='team-plus-img' src={require('../assets/pngs/plus.png')} alt="" />
                                  <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                                  <span className='team-add-text'>Add</span>
                                </button>

                                <button onClick={()=>{
                                  
                                }} className="team-delete">
                                  <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" />
                                  <span className="team-delete-text">Delete</span>
                                </button>
                            </span>
                        </div>
                            <table className="team-member-table">
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 1</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Owner</td>
                                    <td className='team-member-status'></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td>Admin</td>
                                    <td><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Admin</td>
                                    <td className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                            </table>
                    </div>
                    <div className="team-block">
                       <div className="team-header">
                            <span className="team-name-edit">
                                <span className="team-name">MomentumX team</span>
                                <img className="team-edit-button" src={require('../assets/pngs/edit.png')} alt="" />
                            </span>
                            <span className="team-add-delete">

                              <button onClick={()=>{

                              }} className="team-add">
                                <img className='team-plus-img' src={require('../assets/pngs/plus.png')} alt="" />
                                <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                                <span className='team-add-text'>Add</span>
                              </button>

                              <button onClick={()=>{
                                
                              }} className="team-delete">
                                <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" /><span className="team-delete-text">Delete</span>
                              </button>

                            </span>

                        </div>
                          <table className="team-member-table">
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 1</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Owner</td>
                                    <td className='team-member-status'></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Admin</td>
                                    <td className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Admin</td>
                                    <td className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                          </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
};