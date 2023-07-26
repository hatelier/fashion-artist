// import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import axiosInstance from '../components/axiosInstance';
import { useParams } from 'react-router-dom';

interface Product {
  _id: string;
  productName: string;
  previewImage: {
    location: string;
  };
}

export const Manage = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
    // const navigate = useNavigate();
    // const [firstName, setFirstName] = useState("");
    // const [occupation, setOccupation] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const {showroomId} = useParams();
    const [showroomName, setShowroomName] = useState('');
    
    const fetchProducts = useCallback((async () => {
      
      try {
        const response = await axiosInstance.post(`/showroom/${showroomId}/products`);
        setProducts(response.data.products);
        setShowroomName(response.data.showroomName);
        console.log(setShowroomName);
      } catch (error) {
        console.error(error);
      }
    }),[showroomId]);
    
    useEffect(() => {
      // fetchUserData();
      fetchProducts();
    }, [fetchProducts]);

    // const fetchUserData = async () => {
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
    // };

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
                    <span>{showroomName}'s Showroom</span>
                    <button onClick={()=>{}} className="analytics-download-button">Share</button>
                 </div>
               </div>
             </div>
             </div>
             <div className="subscription">
             {products.map((product) => (
                <div key={product._id} className="manage-item">
                  <div className="manage-item-img">
                  <img src={product.previewImage.location} alt={product.productName} height={50} width={50}/>
                  </div>
                  <div className="manage-item-details">
                    <div className="manage-item-name">{product.productName}</div>
                    <div className="manage-item-id-date">
                      <div className="manage-item-id">Product Id: {product._id}</div>
                      <div className="manage-item-date"></div>
                    </div>
                  </div>
                </div>
              ))} 
              </div>
                 {/* <div className="manage-row"> */}
                    {/* <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div> */}
                 {/* </div> */}
               {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
);
};