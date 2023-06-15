import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from '../components/Card';
import { Header } from '../components/header';

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
export const Products = () => {
  const [firstName, setFirstName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/product/products');
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.error('Error fetching products');
    }
  };
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

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
        <div className='sidenav' id='sidenav'>
          <div className='upper-menu'>
            <div className="userblock">
              <div className="current-user">
                <div className="avatar">
                  <img src={require('../assets/pngs/user-icon.png')} alt="user-icon" />
                </div>
                <div className="user-details">
                  <div className="username">{firstName}</div>
                  <div className="occupation">{occupation}</div>
                </div>
                <div className="arrow">
                  <img src={require('../assets/pngs/down.png')} alt="" />
                </div>
              </div>
              <div className="new-team">
                <img src={require('../assets/pngs/new-team.png')} alt="" />
                <div>New Team</div>
              </div>
            </div>
            <div>
              <button className="add-product" onClick={productPopup}>
                <img src={require('../assets/pngs/plus.png')} alt="add new product" />
                New Product
              </button>
            </div>
            <div className='submenu'>
              <div className='item'>
              <a href="/">Dashboard</a>
              </div>
              <div className='item'>
              <a href="/products">Products</a>
              </div>
              <div className='item'>
              <a href="/analytics">Analytics</a>
              </div>
              <div className='item'>
              <a href="/showroom">Showroom</a>
              </div>
              <div className='item'>
              <a href="/3d-fashion-lab">3D Fashion Lab</a>
              </div>
            </div>
          </div>  
          <div className="dropdown resource-menu">
            <div className="dropdown-content">
              <a href="#"><img src={require('../assets/pngs/tutorial.png')} alt="resources" /> Tutorials </a>
              <a href="#"><img src={require('../assets/pngs/documentation.png')} alt="resources" /> Documentation </a>
              <a href="#"><img src={require('../assets/pngs/api-plugins.png')} alt="resources" /> API & Plugins </a>
              <a href="#"><img src={require('../assets/pngs/feedback.png')} alt="resources" /> Feedback </a>
            </div>
            <div className="resources">
              <img src={require('../assets/pngs/resources.png')} alt="resources" /> Resources <img src={require('../assets/pngs/up.png')} alt="toggle" className="toggle" />
            </div>
          </div>
        </div>
       <div className='main'>
         <div className='text'>
           <div className='dashboard'>
           Products
           </div>
        </div>
        <div className='insights'>
          <div className='info'>
            <div className='info-name'>Total Products</div>
            <div className='info-value'>290</div>
            <div className='info-view'><a className='info-view-link' href="/products">See all Products</a></div>
          </div>
          <div className='info'>
            <div className='info-name'>Total 3d view</div>
            <div className='info-value'>500</div>
            <div className='info-view'><a className='info-view-link' href="/analytics">View analytics</a></div>
          </div>
          <div className='info'>
            <div className='info-name'>Total AR view</div>
            <div className='info-value'>870</div>
            <div className='info-view'><a className='info-view-link' href="/analytics">See analytics report</a></div>
          </div>
        </div>
        <div className='products'>
        <div className='recent-products'>
          All Products
          <div className='input-group'>
            <input type='text' placeholder='Search by product name' className='search' />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" className='filter'>
              <img src={require('../assets/pngs/filter.png')} alt="filter" />
              <span className='filter-text'>Filter</span>
                </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                className='filter'
              >
                <MenuItem value={10}>by Tag</MenuItem>
               <MenuItem value={20}>by File type</MenuItem>
                <MenuItem value={30}>Date</MenuItem>
                <MenuItem value={30}>by Product name</MenuItem>
                <MenuItem value={30}>by Draft</MenuItem>
                <MenuItem value={30}>by Published</MenuItem>
                <MenuItem value={30}>by Schedules</MenuItem>
                <MenuItem value={30}>by Team</MenuItem>
             </Select>
            </FormControl>
            <button className="add-product input-button" onClick={productPopup}>
              <img src={require('../assets/pngs/plus.png')} alt="add new product" />
              New Product
            </button>
          </div>
        </div>
        {products.map((product) => (
          <Card key={product._id}>
            <h2>{product.productName}</h2>
            {product.previewImage && (
              <div>
                <h3>Preview Image:</h3>
                <img src={product.previewImage.location} alt="Preview" />
              </div>
            )}
          </Card>
        ))}
       </div>
       </div>
        </div>
      </section>
    </div>
        );
        }

// const Files = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const onFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const onSubmit = async (event) => {
//         event.preventDefault();;
//         try {
//             const formData = new FormData();
//             formData.append('files', selectedFile);
//             const response = await fetch ("http://localhost:3001/products", {
//                 method: "POST",
//                 body: formData,
//             });
//             console.log("File uploaded successfully");
//         }
//         catch(error) {
//             console.log("Error uploading file");
//         }
//     };
//     return <ProductForm onFileChange={onFileChange} onSubmit={onSubmit} />;
// };

// const ProductForm = ({onFileChange, onSubmit}) => {
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type='file' onChange={onFileChange} />
//                 <button type='submit'>Upload</button>
//             </form>
//         </div>
//     );
// };