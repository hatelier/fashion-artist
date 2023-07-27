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

    const toggleChildVisibility = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const parentElement = event.currentTarget;
        const childElement = parentElement.previousElementSibling;
      
        if (childElement) {
          // Toggle the "visible" class on the child element
          childElement.classList.toggle('visible');
        }
      };

      const AssetItem = ({ name }: { name: string })=>{
        return(
            <div className="asset-item">
                                <div className="asset-item-img"></div>
                                <div className="asset-item-details">
                                    <div className="manage-item-name">{name}</div>
                                    <div className="manage-item-id-date">
                                        <div className="card-dropup" style={{position: 'relative'}} >
                                          <div className="card-dropup-content child" style={{display: 'flex', position: 'absolute', visibility: 'hidden'}}>
                                          <img src={require('../assets/pngs/arrow-left.png')} alt="" />
                                          <img src={require('../assets/pngs/products-duplicate.png')} alt="" />
                                          <img src={require('../assets/pngs/products-trash.png')} alt="" />
                                          </div>
                                          <div id="card-1" onClick={toggleChildVisibility}>
                                          <img src={require('../assets/pngs/card-dots.png')} alt="" />
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        )
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

                <div className="assets-container">
                    <input type="text" placeholder="Search assets" className="asset-search"/>
                    <div className="manage-block asset-block">
                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Meshes</div>
                                    <a href='/' className="asset-see-all">See all</a>
                                </div>
                            <div className="asset-row-items">

                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            <AssetItem name = "mesh"/>
                            </div>
                        </div>

                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Materials</div>
                                    <a href='/' className="asset-see-all">See all</a>
                                </div>
                            <div className="asset-row-items">
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            <AssetItem name = "material"/>
                            </div>
                        </div>


                        <div className="asset-row">
                            <div className="asset-row-header">
                                <div className="asset-row-heading">Shared Files</div>
                                    <a href='/' className="asset-see-all">See all</a>
                                </div>
                            <div className="asset-row-items">
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
                            <AssetItem name = "Anotation"/>
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