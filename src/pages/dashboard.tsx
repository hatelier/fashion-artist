import { useCallback, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Header } from "../components/header";
// import { toast } from "react-toastify";
import { Sidenav } from "../components/sidenav";
import TokenVerification from "../components/auth";
import {axiosInstance} from '../components/axiosInstance';
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
  const [firstName, setFirstName] = useState("");
  const [productCount, setProductCount] = useState(0);
  const [threeDViewCount, setThreeDViewCount] = useState([{ _id: '', count: 0, date: new Date() }]);
  const [arViewCount, setArViewCount] = useState([{ _id: '', count: 0, date: new Date() }]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cookies] = useCookies(["userId"]);
  const userId = cookies.userId;
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  
  const fetchUserData = useCallback(async () => {
    try {
      const userID = cookies.userId;
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
  },[cookies.userId]);
  
  const [isOpen, setIsOpen] = useState(false);

  const productPopup = () => {
    setIsOpen(!isOpen);
  };

  const productPopupCancel = () => {
    setIsOpen(!isOpen);
  };

  const [isSharing, setIsSharing] = useState(false);
  const sharePopup = () => {
    setIsSharing(!isSharing);
  };

  const sharePopupCancel = () => {
    setIsSharing(!isSharing);
  };

  const [display, setDisplay] = useState<'none' | 'flex'>('none');

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
  };

  
  // const childRef1 = useRef<HTMLDivElement>(null);

  // const toggleDisplay2 = (childRef: React.RefObject<HTMLDivElement>) => {
  //   if (childRef.current) {
  //     const childElement = childRef.current as HTMLDivElement;
  //     childElement.style.display = childElement.style.display === 'none' ? 'flex' : 'none';
  //   }
  // };
  // const [isElementVisible, setElementVisible] = useState(false);

  // const handleClick = () => {
  //   const element = document.querySelector('#sidenav') as HTMLElement;
  //   element.style.display = element.style.display === 'none' ? 'block' : 'none';
  // };
  const toggleChildVisibility = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const parentElement = event.currentTarget;
    const childElement = parentElement.previousElementSibling;

    if (childElement) {
      // Toggle the "visible" class on the child element
      childElement.classList.toggle('visible');
    }
  };
  const fetchProductCount = async () => {
    try {
      const response = await axiosInstance.get('/analytics/count')
      const productCount = response.data;
      setProductCount(productCount);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = useCallback(async (userId: string) => {
    try {
      const response = await axiosInstance.get(`/product/products?userId=${userId}`);
      const productData = response.data;
      setProducts(productData);
    } catch (error) {
      console.error('Error fetching products');
    }
  }, []);

  const fetchthreeDViewCount = useCallback(async (period: string) => {
    try {
      const response = await axiosInstance.get(`/analytics/threeDViewCount/${period}`);
      const count = response.data;
      setThreeDViewCount(count);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetcharViewCount = useCallback(async (period: string) => {
    try {
      const response = await axiosInstance.get(`/analytics/arViewCount/${period}`);
      const count = response.data;
      setArViewCount(count);
    } catch (error) {
      console.error(error);
    }
  },[]);

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  useEffect(() => {
    fetchUserData();
    fetchProductCount();
    fetchProducts(userId);
    fetchthreeDViewCount(selectedPeriod);
    fetcharViewCount(selectedPeriod);
  }, [fetchProducts, fetchUserData, fetcharViewCount, fetchthreeDViewCount, selectedPeriod, userId]);

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
            {isSharing && (
        <div className="sharing-popup">
          <div className="sharing-close-container">
            <img className="sharing-close-button" src={require('../assets/pngs/report-cross.png')} alt="" onClick={sharePopupCancel}/>
          </div>
          <div className="sharing-header">
            <div className="sharing-heading">
                Share
            </div>
            <div className="sharing-text">
            Nulla quam suspendisse tincidunt odio. Neque leo egestas leo interdum cum porttitor sed.
            </div>
          </div>
          <div className="sharing-link-copy">
            <img src={require('../assets/pngs/attach.png')} alt="" />
            <div className="sharing-link-text">https://www.momentumx.com/allproducts/</div>
            <button className="sharing-copy">Copy</button>
          </div>
          <div className="share-via">
            <div className="share-via-text">Share Via:</div>
            <div className="share-via-icons">
              <button className="share-via-button"><img src={require('../assets/pngs/whatsapp.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/instagram.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/linkedin.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/twitter.png')} alt="" /></button>
              <button className="share-via-button"><img src={require('../assets/pngs/facebook.png')} alt="" /></button>
            </div>
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
                <div onClick={() => handlePeriodChange("day")}>Today</div>
                <div onClick={() => handlePeriodChange("week")}>This Week</div>
                <div onClick={() => handlePeriodChange("month")}>This Month</div>
              </div>
            </div>
            <div className="insights">
              <div className="info">
                <div className="info-name">Total Products</div>
                <div className="info-value">{productCount}</div>
                <div className="info-view">
                  <a className="info-view-link" href="/products">
                    <span>See all products</span>
                    <img className="sidenav-img info-img" src={require("../assets/pngs/Arrow_1.png")} alt=""/>
                </a>
                </div>
              </div>
              <div className="info">
                <div className="info-name">Total 3D view</div>
                {threeDViewCount.length > 0 ? (
                // If the array is not empty, display the sum of counts
                <div className="info-value">
                  {threeDViewCount.reduce((total, entry) => total + entry.count, 0)}
                </div>
                ) : (
                  // If the array is empty, display 0
                  <div className="info-value">0</div>
                )}
                <div className="info-view">
                  <a className="info-view-link" href="/analytics">
                    <span>View analytics</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/Arrow_1.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="info">
                <div className="info-name">Total AR view</div>
                {arViewCount.length > 0 ? (
                  // If the array is not empty, display the sum of counts
                  <div className="info-value">
                    {arViewCount.reduce((total, entry) => total + entry.count, 0)}
                  </div>
                ) : (
                  // If the array is empty, display 0
                  <div className="info-value">0</div>
                )}                
                  <div className="info-view">
                  <a className="info-view-link" href="/showroom">
                    <span>View all Showroom</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/Arrow_1.png")}
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
                  <div className="templates-block">
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
                  <div className="card-dropup-content child" style={{display: 'flex', visibility: 'hidden'}}>
                  <img src={require('../assets/pngs/products-duplicate.png')} alt="" />
                  <img src={require('../assets/pngs/products-trash.png')} alt="" />
                  <img src={require('../assets/pngs/products-edit.png')} alt="" />
                  <img src={require('../assets/pngs/products-share.png')} alt="" onClick={sharePopup} />
                  </div>
                  <div id="card-1" className="three-dot" onClick={toggleChildVisibility}>
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
        </div>
    </section>
    <TokenVerification />
    </div>
);
};
