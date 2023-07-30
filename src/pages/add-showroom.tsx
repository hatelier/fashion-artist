// import axios from 'axios'; //Fetch
import { useCallback, useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import axiosInstance from '../components/axiosInstance';
// import Card from '../components/Card';


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

export const AddShowroom = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  const [showroomName, setShowroomName] = useState('');
  const [tags, setTags] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setLogoFile((prevFile) => file || prevFile);
  };

  const handleUpload = useCallback(async () => {
    const userId = window.localStorage.getItem('userID');
    
    if (logoFile) {
      try {
        const formData = new FormData();
        formData.append('logoFile', logoFile);
        formData.append('name', showroomName || '');
        formData.append('tags', tags || '');
        formData.append('userId', userId || '');
        formData.append('productId', JSON.stringify(selectedProductId));

        const response = await axiosInstance.post('/showroom/new', formData);
        const showroomId = response.data.showroomId;
        
        navigate(`/manage/${showroomId}`);
      } catch (error) {
        // Handle the error appropriately (e.g., show error message)
        console.error('Error creating showroom:', error);
      }
    } else {
      // Handle the case when no file is selected or uploaded
      console.error('No file selected or uploaded');
    }
  }, [logoFile, navigate, showroomName, tags, selectedProductId]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/product/products");
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.error("Error fetching products");
    }
  }, []);

  const handleCheckboxChange = (productId: string) => {
    setSelectedProductId((prevProductIds) => {
      if (prevProductIds.includes(productId)) {
        return prevProductIds.filter((id) => id !== productId);
      } else {
        return [...prevProductIds, productId];
      }
    });
  };

  useEffect(() => {
    // fetchUserData();
    fetchProducts();
  }, [fetchProducts]);

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

  const [isCreated, setIsCreated] = useState(false);
  const createdPopup = () => {
    setIsCreated(!isCreated);
  };
  
  const createdPopupCancel = () => {
    setIsCreated(!isCreated);
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
                {isCreated && (
        <div className="sharing-popup">
          <div className="sharing-close-container">
            <img className="sharing-close-button" src={require('../assets/pngs/report-cross.png')} alt="" onClick={createdPopupCancel}/>
          </div>
          <div className="sharing-header">
            <div className="sharing-heading add-showroom-popup-heading">
            ‘Showroom Name’ Showroom has been updated Successfully !
            </div>
            <div className="add-showroom-popup-text">
            Now you can view ‘Showroom Name’
            </div>
          </div>
          <div className='add-showroom-popup-button'>
            <a href="/manage" className='add-showroom-popup-view'>View</a>
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

                    <button className="add-showroom-create" onClick={handleUpload}>
                      <div onClick={createdPopup}><img className='add-showroom-button-img' src={require('../assets/pngs/tab 1.png')} alt="" /><span className="add-showroom-create-text">Create</span></div>
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
                            <label htmlFor="">Seasons</label>
                            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}/>
                        </div>
                        </div>
                        <div className='add-showroom-details-buttons'>
                        </div>
                        </div>  
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Tags</label>
                            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}/>
                        </div>
                </div>
                <div className="add-showroom-layouts">
                    <div className="add-showroom-heading">Showroom Layout</div>
                    <div className="add-showroom-layouts-block">
                        <div className="add-showroom-font-text">
                            <div className="add-showroom-layout-products">
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
                             <div className="add-showroom-layout-text">
                                <label htmlFor="">Text Color</label>
                                <div className="red-patch"><div className="red-patch-inside"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-showroom-products">
                    <div className="add-showroom-products-block">
                    <div className="add-showroom-heading">Products</div>
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
                          {/* <div className="add-showroom-product-item-container">
                              <div className="add-showroom-product-item">
                                <div className="product-item-img-div">
                                  <input type="checkbox" name="" id="" className='product-item-checkbox'/>
                                </div>
                              </div>
                              <div className="product-item-text">Product 01</div>
                          </div>
                          <div className="add-showroom-product-item-container">
                              <div className="add-showroom-product-item">
                                <div className="product-item-img-div">
                                  <input type="checkbox" name="" id="" className='product-item-checkbox'/>
                                </div>
                              </div>
                              <div className="product-item-text">Product 01</div>
                          </div>
                          <div className="add-showroom-product-item-container">
                              <div className="add-showroom-product-item">
                                <div className="product-item-img-div">
                                  <input type="checkbox" name="" id="" className='product-item-checkbox'/>
                                </div>
                              </div>
                              <div className="product-item-text">Product 01</div>
                          </div>
                          <div className="add-showroom-product-item-container">
                              <div className="add-showroom-product-item">
                                <div className="product-item-img-div">
                                  <input type="checkbox" name="" id="" className='product-item-checkbox'/>
                                </div>
                              </div>
                              <div className="product-item-text">Product 01</div>
                          </div> */}
                          {products.map((product) => (
                            <div className="add-showroom-product-item-container" key={product._id}>
                              <div className="add-showroom-product-item">
                                <div className="product-item-img-div">
                                  <input type="checkbox" onChange={() => handleCheckboxChange(product._id)} className='product-item-checkbox' />
                                  {product.previewImage && (
                                    <img className="product-item-img" src={product.previewImage.location} alt="Preview" height={66} width={60}/>
                                  )}
                                </div>
                              </div>
                              <div className="product-item-text">{product.productName}</div>
                            </div>
                          ))}
                           <div>
                           {/* {products.map((product) => (
                            <Card key={product._id}>
                             {product.previewImage && (
                             <div className="card-img-container">
                               <div className="card-img-box">
                                <input type='checkbox' onChange={() => handleCheckboxChange(product._id)}/>
                               <img className="card-img" src={product.previewImage.location} alt="Preview" />
                               </div>
                             </div>
                             )}
                            </Card>
                            ))} */}
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