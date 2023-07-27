import { useEffect, useState, useRef } from "react";
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { Header } from "../components/header";
// import { toast } from "react-toastify";
import { Sidenav } from "../components/sidenav";
import TokenVerification from "../components/auth";
import axiosInstance from '../components/axiosInstance';
import Card from '../components/Card';
import {FiUpload} from "react-icons/fi";
import {BsPencil} from "react-icons/bs";

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
  createdAt: string;
  publish: any;
  __v: number;
}

export const Dashboard = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  const [productCount, setProductCount] = useState(0);
  const [threeDViewCount, setThreeDViewCount] = useState(0);
  const [arViewCount, setArViewCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchUserData();
    fetchProductCount();
    fetchProducts();
    fetchthreeDViewCount();
    fetcharViewCount();
  }, []);

  const fetchUserData = async () => {
    try {
      const userID = window.localStorage.getItem("userID");
      const response = await axiosInstance.get("/user/profile", {
        params: {
          userID: userID,
        },
      });
      const userData = response.data;

      setFirstName(userData.firstname);
      // setOccupation(userData.occupation);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };
  // const logout = () => {
  //   setCookie('access_token',"");
  //   window.localStorage.removeItem("userID");
  //   navigate("/auth");
  // }
  const [isOpen, setIsOpen] = useState(false);

  const productPopup = () => {
    setIsOpen(!isOpen);
  };

  const productPopupCancel = () => {
    setIsOpen(!isOpen);
  };

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
  // const [isElementVisible, setElementVisible] = useState(false);

  // const handleClick = () => {
  //   const element = document.querySelector('#sidenav') as HTMLElement;
  //   element.style.display = element.style.display === 'none' ? 'block' : 'none';
  // };

  const fetchProductCount = async () => {
    try {
      const response = await axiosInstance.get('/analytics/count')
      const productCount = response.data;
      setProductCount(productCount);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('/product/products');
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.error('Error fetching products');
    }
  };

  const fetchthreeDViewCount = async () => {
    try {
      const response = await axiosInstance.get('/analytics/threeDViewCount');
      const count = response.data;
      setThreeDViewCount(count);
    } catch (error) {
      console.error(error);
    }
  };

  const fetcharViewCount = async () => {
    try {
      const response = await axiosInstance.get('/analytics/arViewCount');
      const count = response.data;
      setArViewCount(count);
    } catch (error) {
      console.error(error);
    }
  };
  const baseReactUrl = window.location.origin.toString();
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
            <button className="product-popup-create"
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
            >Create</button>
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
                <div className="dashboard">Hello, {firstName}</div>
                <div className="welcome">Welcome to your dashboard</div>
              </div>
            </div>
            <div className="dashboard-filter-block">

            </div>
            <div className="dashboard-filter-container">
              <div className="dashboard-date-filter" onClick={toggleDisplay}><span>This Week</span> <img className="sidenav-img" src={require('../assets/pngs/Dropdown.png')} alt="" /></div>
              <div className="dashboard-filter-dropdown" style={{ display }} id="dashboard-filter-dropdown">
                <div>Today</div>
                <div>This Week</div>
                <div>This Month</div>
                </div>
            </div>
            <div className="insights">
              <div className="info">
                <div className="info-name">Total Products</div>
                <div className="info-value">{productCount}</div>
                <div className="info-view">
                  <a className="info-view-link" href="/products">
                    <span>See all Products</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/arrow.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="info">
                <div className="info-name">Total 3D view</div>
                <div className="info-value">{threeDViewCount}</div>
                <div className="info-view">
                  <a className="info-view-link" href="/analytics">
                    <span>View analytics</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/arrow.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="info">
                <div className="info-name">Total AR view</div>
                <div className="info-value">{arViewCount}</div>
                <div className="info-view">
                  <a className="info-view-link" href="/manage">
                    <span>View all Showroom</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/arrow.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="products">
              <div className="recent-products">
                <div className="recent-products-header"><div>Recent Products </div>                  <button
                    className="add-product input-button"
                    onClick={productPopup}
                  >
                    <img
                      src={require("../assets/pngs/add.png")}
                      alt="add new product"
                    />
                    New Product
                  </button></div>
                  </div>
            {products.map((product) => (
          <Card key={product._id}>
            {product.previewImage && (
              <div className="card-img-container"
                   onClick={() => {
                     window.open(
                         `${baseReactUrl}/editor/${product.productName}/main`,
                         "_self"
                     );
                   }}
              >
                <div className="card-img-box">
                <img className="card-img" src={product.previewImage.location} alt="Preview" />
                </div>
              </div>
            )}
            <div className="card-name">{product.productName}</div>
            <div className="card-bottom">
              <div className="card-date">{product.createdAt}</div>
              <div className="card-buttons">
                {
                  product.publish.state ? <div><FiUpload size={14}/></div> :   <div><BsPencil size={14}/></div>
                }
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
        )).reverse()}
                    </div>
          </div>
        </div>
    </section>
    <TokenVerification />
    </div>
);
};
