// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';

//Needs rework
export const Assets = () => {
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
                            <div className="analytics-header">
                                <span>Asset Library</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subscription">
                    <div className="choose-plan">
                        All Assets
                    </div>

                    <input type="text" placeholder="Search assets" className="asset-search"/>

                    <div className="manage-block asset-block">

                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Meshes</div>
                                    <button onClick={()=>{}} className="asset-see-all">See all</button>
                                </div>
                            <div className="asset-row-items">

                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Materials</div>
                                <button onClick={()=>{}} className="asset-see-all">See all</button>
                                </div>
                            <div className="asset-row-items">    
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Textures</div>
                                <button onClick={()=>{}} className="asset-see-all">See all</button>
                                </div>

                            <div className="asset-row-items">    
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">Mesh</div>
                                    <div className="manage-item-id-date">
                                        {/* <div className="asset-drop-up">
                                            <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                            <img src={require('../assets/pngs/eye.png')} alt="" />
                                            <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                            <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                        </div> */}
                                        <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Annotation Files</div>
                                <button onClick={()=>{}} className="asset-see-all">See all</button>
                            </div>

                            <div className="asset-row-items">
                                
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>

                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-item">
                                    <div className="asset-item-img"></div>
                                    <div className="asset-item-details">
                                        <div className="manage-item-name">Mesh</div>
                                        <div className="manage-item-id-date">
                                            {/* <div className="asset-drop-up">
                                                <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                                <img src={require('../assets/pngs/eye.png')} alt="" />
                                                <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                                <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                            </div> */}
                                            <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                                        </div>
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

//Create asset componeent and map based on API Dat
// const AssetItem = ()=>{
//     return (
//         <div className="asset-item">
//             <div className="asset-item-img"></div>
//             <div className="asset-item-details">
//                 <div className="manage-item-name">Mesh</div>
//                 <div className="manage-item-id-date">
//                     {/* <div className="asset-drop-up">
//                         <img src={require('../assets/pngs/left-arrow.png')} alt="" />
//                         <img src={require('../assets/pngs/eye.png')} alt="" />
//                         <img src={require('../assets/pngs/duplicate.png')} alt="" />
//                         <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
//                     </div> */}
//                     <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
//                 </div>
//             </div>
//         </div>
//     )
// }