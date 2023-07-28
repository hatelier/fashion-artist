// import axios from 'axios'; //Fetch
import { useCallback, useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import axiosInstance from '../components/axiosInstance';
import Card from '../components/Card';


interface Product {
  _id: string;
  userId: string;
  folderName: string;
  asset: {
    originalName: string;
    fileName: string;
    mimeType: string;
    size: number;
    location: string;
    _id: string;
  };
  productName: string;
  brandName: string;
  previewImage: {
    originalName: string;
    fileName: string;
    mimeType: string;
    size: number;
    location: string;
    _id: string;
  };
  pipeline: string;
  tags: string[];
  productID: number;
  customMaterials: string[];
  __v: number;
}

export const EditShowroom = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
  const {showroomID} = useParams();
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  const [showroomName, setShowroomName] = useState('');
  const [tags, setTags] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [showroomId, setShowroomId] = useState(showroomID);
  

  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setLogoFile((prevFile) => file || prevFile);
  };
  
  // Fetch showroom details using the GET API
  const fetchShowroomDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/showroom/details/${showroomId}`);
      const showroomData = response.data;

      // Update state with showroom details received from the API
      setShowroomName(showroomData.name);
      setTags(showroomData.tags);
      setProducts(showroomData.products);
    } catch (error) {
      console.error('Error fetching showroom details:', error);
    }
  }, [showroomId]);

  // Function to handle the showroom update using the PUT API
  const handleUpdateShowroom = async () => {
    try {
      const formData = new FormData();

      // Check if showroomName is provided and add it to formData
      if (showroomName) {
        formData.append('name', showroomName);
      }
    
      // Check if tags are provided and add them to formData
      if (tags.length > 0) {
        formData.append('tags', JSON.stringify(tags));
      }
    
      // Check if selectedProductIds are provided and add them to formData
      if (selectedProductIds.length > 0) {
        formData.append('products', JSON.stringify(selectedProductIds));
      }

      // If a new logo file is selected, add it to the formData
      if (logoFile) {
        formData.append('logoFile', logoFile);
      }
    
      // Make the PUT request to update the showroom details
      const response = await axiosInstance.put(`/showroom/updateshowroom/${showroomID}`, formData);
      const updatedShowroom = response.data.showroom;
    
      // Update the state with the updated showroom details if available
      if (updatedShowroom) {
        // Update showroomName if provided
        if (showroomName) {
          setShowroomName(updatedShowroom.name);
        }
      
        // Update tags if provided
        if (tags.length > 0) {
          setTags(updatedShowroom.tags);
        }
      }
      navigate(`/manage/${showroomID}`);
    } catch (error) {
        // Handle the error appropriately (e.g., show error message)
      console.error('Error updating showroom details:', error);
    }
  };

  // Function to handle checkbox changes for product selection
  const handleCheckboxChange = (productId: string) => {
    setSelectedProductIds((prevProductIds) => {
      if (prevProductIds.includes(productId)) {
        return prevProductIds.filter((id) => id !== productId);
      } else {
        return [...prevProductIds, productId];
      }
    });
  };

  useEffect(() => {
    if (showroomID) {
      setShowroomId(showroomID);
      // Fetch showroom details when the component mounts or when showroomId changes
      fetchShowroomDetails();
    } else {
      // Handle case when showroomId is not present in the URL
      console.error('Showroom ID not found in URL');
    }
  }, [fetchShowroomDetails, showroomID]);


  // const fetchUserData = async () => {
  //   try {
    // const userID = window.localStorage.getItem('userID');

    // const response = await axios.get("/user/profile", { 
    //   params: {
    //     userID: userID
    //   },
    // });
    // const userData = response.data;

    // setFirstName(userData.firstname);
    // setOccupation(userData.occupation);
  //   } catch (error) {
  //     console.error("Error fetching user data: ", error);
  //   }
  // };

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

                    <button className="add-showroom-create" onClick={handleUpdateShowroom}>
                      <img className='add-showroom-button-img' src={require('../assets/pngs/tab 1.png')} alt="" /><span className="add-showroom-create-text">Update</span>
                    </button>

                    <button className="add-showroom-cancel" onClick={() => navigate(-1)}>
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
                            <input type="text" value={showroomName} onChange={(e) => setShowroomName(e.target.value)}/>
                        </div>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Tags</label>
                            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}/>
                        </div>
                        </div>
                        <div className='add-showroom-details-buttons'>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Logo</label>
                            <button className="add-showroom-upload-button">
                            <label htmlFor="fileInput">
                              <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
                              />
                              <img src={require('../assets/pngs/upload-new.png')} alt="" />
                              <span>Upload</span>
                             </label>
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
                           {products &&
                              products.map((product) => (
                                <Card key={product._id}>
                                  {product.previewImage && (
                                    <div className="card-img-container">
                                      <div className="card-img-box">
                                        <input
                                          type="checkbox"
                                          checked={selectedProductIds.includes(product._id)}
                                          onChange={() => handleCheckboxChange(product._id)}
                                        />
                                        <img className="card-img" src={product.previewImage.location} alt="Preview" />
                                      </div>
                                    </div>
                                  )}
                                </Card>
                              ))}
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