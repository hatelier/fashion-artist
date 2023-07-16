// import axios from 'axios'; //Fetch
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';


export const AddShowroom = () => {
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

    // const response = await axios.get("/user/profile", { 
    //   params: {
    //     userID: userID
    //   },
    // });
    // const userData = response.data;

    // setFirstName(userData.firstname);
    // setOccupation(userData.occupation);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  /*const logout = () => {
    // setCookie('access_token',"")
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

  const [display, setDisplay] = useState<'none' | 'flex'>('none');

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
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
                 <div className="choose-plan add-showroom-header">
                <div>Showroom</div>
                <div className="add-showroom-create-cancel">

                    <button className="add-showroom-create" onClick={()=>{
                      console.log("Create a showroom");
                      
                    }}>
                      <img className='add-showroom-button-img' src={require('../assets/pngs/tab 1.png')} alt="" /><span className="add-showroom-create-text">Create</span>
                    </button>

                    <button className="add-showroom-cancel" onClick={()=>{
                      //Cancel showroom
                      
                    }}>
                      <img className='add-showroom-button-img' src={require('../assets/pngs/cancel.png')} alt="" /><span className="add-showroom-cancel-text">Cancel</span>
                    </button>
                </div>
             </div>

               </div>

             </div>
             </div>
             <div className="subscription">

             <div className="add-showroom-block">
                <div className="add-showroom-details">
                    <div className="add-showroom-heading">Showroom Details</div>
                        <div className="add-showroom-details-block">
                          <div className='add-showroom-details-inputs'>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Showroom Name*</label>
                            <input type="text" />
                        </div>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Tags</label>
                            <input type="text" />
                        </div>
                        </div>
                        <div className='add-showroom-details-buttons'>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Logo</label>

                            <button className="add-showroom-upload-button" onClick={()=>{
                              //Upload
                            }}>
                              <img src={require('../assets/pngs/upload-new.png')} alt="" /><span>Upload</span>
                            </button>
                        </div>
                        </div>
                        </div>  
                </div>
                <div className="add-showroom-layouts">
                    <div className="add-showroom-heading">Showroom Layout</div>
                    <div className="add-showroom-layouts-block">
                        <div className="add-showroom-font-text">
                            <div className="add-showroom-layout-products">
                                <label htmlFor="">#Products per row</label>
                                <div className="credit-unit-buttons">
                                  <button className="credit-minus-button">-</button>
                                  <button className="credit-current-button">9</button>
                                  <button className="credit-plus-button">+</button>
                                </div>
                            </div>
                            <div className='add-showroom-layout-font-text'>
                            <div className="add-showroom-layout-font">
                                <label htmlFor="">Font Family</label>
                                <input type="text" placeholder="Add Tag" className="layout-font-input" />
                            </div>
                            <div className="add-showroom-layout-text">
                                <label htmlFor="">Text Color</label>
                                <div className="red-patch"><div className="red-patch-inside"></div></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-showroom-products">
                    <div className="add-showroom-heading">Products</div>
                    <div className="add-showroom-products-block">
                        <div className="templates-input-group">
                            <input type="text" className="templates-input" placeholder="Search Templates" />
                            <div className="templates-filter-block add-showoom-filter">
                               <div className="templates-filter-dropdown add-showroom-dropdown" style={{ display }}>
                                  <div className="filter-dropdown-item">All</div>
                                  <div className="filter-dropdown-item">Gown</div>
                                  <div className="filter-dropdown-item">Tshirts</div>
                                  <div className="filter-dropdown-item">Hoodie</div>
                                  <div className="filter-dropdown-item">Trouser</div>
                                  <div className="filter-dropdown-item">Sportwear</div>
                                  <div className="filter-dropdown-item">Leggings</div>
                                  <div className="filter-dropdown-item">Glasses</div>
                                  <div className="filter-dropdown-item">Footwear</div>
                                  <div className="filter-dropdown-item">Makeups</div>
                                </div>
                                <div className="templates-filter" onClick={toggleDisplay}><img className='sidenav-img' src={require('../assets/pngs/filter-icon.png')} alt="" /><span>Filter</span><img className='sidenav-img' src={require('../assets/pngs/Dropdown.png')} alt="" /></div>
                                </div>
                          </div>
                        <div className="add-showroom-products-row">
                           <div>
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