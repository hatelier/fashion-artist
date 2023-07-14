import axios from "axios";
import { useEffect, useState, useRef } from "react";
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "../components/Card";
import { Header } from "../components/header";
import { Sidenav } from "../components/sidenav";
import TokenVerification from '../components/auth';

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
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/product/products");
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.error("Error fetching products");
    }
  };

  const fetchUserData = async () => {
    /* try {
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
  const productPopup = () => {
    setIsOpen(!isOpen);
  };
  const productPopupCancel = () => {
    setIsOpen(!isOpen);
  };

  // const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  const [display, setDisplay] = useState<'none' | 'flex'>('none');

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
  };

  const childRef1 = useRef<HTMLDivElement>(null);

  const toggleDisplay2 = (childRef: React.RefObject<HTMLDivElement>) => {
    if (childRef.current) {
      const childElement = childRef.current as HTMLDivElement;
      childElement.style.display = childElement.style.display === 'none' ? 'flex' : 'none';
    }
  };
  return (
    <div className="home-container">
      {isOpen && (
        <div className="product-popup">
          <div className="product-popup-main">
            <label htmlFor="" className="product-popup-label">
              Product Name
            </label>
            <input
              type="text"
              placeholder="New Product"
              className="product-popup-input"
              id={"productCreatePopUp"}
            />
            <div className="product-popup-configurable">
              <input type="checkbox" /> <span>Create Configurable Product</span>
            </div>
          </div>
          <div className="product-popup-buttons">
            <button
              className="product-popup-cancel"
              onClick={productPopupCancel}
            >
              Cancel
            </button>
            <button
              className="product-popup-create"
              onClick={() => {
                let documentName: any =
                  document.getElementById("productCreatePopUp");
                if (documentName.value) {
                  const baseReactUrl = window.location.origin.toString();
                  window.open(
                    `${baseReactUrl}/editor/new/${documentName.value.replace(
                      / /g,
                      "_"
                    )}`,
                    "_self"
                  );
                } else {
                  window.alert("Product name cant be blank");
                }
              }}
            >
              Create
            </button>
          </div>
        </div>
      )}
      <section>
        <Header />
        <div className="content">
          <Sidenav />
          <div className="main">
            <div className="main-header">
              <div className="text">
                <div className="dashboard">Products</div>
              </div>
            </div>
            <div className="products">
              <div className="recent-products">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search by product name"
                    className="templates-input"
                  />
                  <div className="templates-filter-block">
                  <div className="templates-filter" onClick={toggleDisplay}><img className='sidenav-img' src={require('../assets/pngs/filter-icon.png')} alt="" /><span>Filter</span><img className='sidenav-img' src={require('../assets/pngs/Dropdown.png')} alt="" /></div>
                  <div className="templates-filter-dropdown" style={{ display }}>
                    <div className="filter-dropdown-item">by Tag</div>
                    <div className="filter-dropdown-item">by File type</div>
                    <div className="filter-dropdown-item">by Date</div>
                    <div className="filter-dropdown-item">by Product name</div>
                    <div className="filter-dropdown-item">by Draft</div>
                    <div className="filter-dropdown-item">by Published</div>
                    <div className="filter-dropdown-item">by Scheduled</div>
                    <div className="filter-dropdown-item">by Team</div>
                  </div>
                  </div>
                  {/* <FormControl fullWidth className="filter-box">
                    <InputLabel
                      id="demo-simple-select-label"
                      className="filter"
                    >
                      <img
                        src={require("../assets/pngs/filter.png")}
                        alt="filter"
                      />
                      <span className="filter-text">Filter</span>
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      className="filter"
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
                  </FormControl> */}
                  <button
                    className="add-product input-button"
                    onClick={productPopup}
                  >
                    <img
                      src={require("../assets/pngs/add.png")}
                      alt="add new product"
                    />
                    New Product
                  </button>
                </div>
              </div>
              {products.map((product) => (
          <Card key={product._id}>
            {product.previewImage && (
              <div className="card-img-container">
                <div className="card-img-box">
                <img className="card-img" src={product.previewImage.location} alt="Preview" />
                </div>
              </div>
            )}
            <div className="card-name">{product.productName}</div>
            <div className="card-bottom">
              <div className="card-date">dd/mm/yy</div>
              <div className="card-buttons">
                <div><img src={require('../assets/pngs/card-upload.png')} alt="" /></div>
                <div className="card-dropup">
                  <div ref={childRef1} className="card-dropup-content">
                  <img src={require('../assets/pngs/products-duplicate.png')} alt="" />
                  <img src={require('../assets/pngs/products-trash.png')} alt="" />
                  <img src={require('../assets/pngs/products-edit.png')} alt="" />
                  <img src={require('../assets/pngs/products-share.png')} alt="" />
                  </div>
                  <div onClick={() => toggleDisplay2(childRef1)} id="card-1">
                  <img src={require('../assets/pngs/card-dots.png')} alt="" />
                  </div>
                  </div>
                  </div>
            </div>
          </Card>
        ))}
            </div>
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
  );
};

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
