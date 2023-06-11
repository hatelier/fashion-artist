import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Products = () => {
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
        <header className="header">
          <img
          src={require('../assets/pngs/mx-logo.png')}
          alt="mxlogo"
          className="mx-logo"
        />
        <img
          src={require('../assets/pngs/bell-icon.png')}
          alt="bell-icon"
          className="bell-icon"
        />
        <div className="dropdown-top">
        <img
          src={require('../assets/pngs/small-avatar-icon.png')}
          alt="small-avatar-icon"
          className="small-avatar-icon dropbtn"
        />
         <div className="dropdown-top-content">
         <a href="/account">
         <img
          src={require('../assets/pngs/account-icon.png')}
          alt="account-icon"
        /> Account</a>
         <a href="/teams">
         <img
          src={require('../assets/pngs/teams-icon.png')}
          alt="teams-icon"
        />Teams</a>
         <a href="#">
         <img
          src={require('../assets/pngs/headset-help-icon.png')}
          alt="help-icon"
        />Help Desk</a>
         {!cookies.access_token ? (
            <a href="/auth">
            <img src={require('../assets/pngs/logout-icon.png')} alt="login-icon" />
            Login/Register
            </a>
            ) : (
            <a href="#" onClick={logout}>
            <img src={require('../assets/pngs/logout-icon.png')} alt="logout-icon" />
            Logout
            </a>
            )}
         </div>
        </div>
        </header>
        <div className='content'>
        <div className='sidenav'>
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
            {/* <div className='filter'>
              <img src={require('../assets/pngs/filter.png')} alt="filter" />
              <span className='filter-text'>Filter</span>
              <img src={require('../assets/pngs/down.png')} alt="" />
            </div> */}
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