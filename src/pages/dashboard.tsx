import { useEffect, useState } from "react";
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Header } from "../components/header";
// // import { toast } from "react-toastify";
import { Sidenav } from "../components/sidenav";
import TokenVerification from '../components/auth';

export const Dashboard = () => {
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userID = window.localStorage.getItem("userID");
      const response = await axios.get("/user/profile", {
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

  // const productPopup = () => {
  //   setIsOpen(!isOpen);
  // };

  const productPopupCancel = () => {
    setIsOpen(!isOpen);
  };

  // const [isElementVisible, setElementVisible] = useState(false);

  // const handleClick = () => {
  //   const element = document.querySelector('#sidenav') as HTMLElement;
  //   element.style.display = element.style.display === 'none' ? 'block' : 'none';
  // };

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
            <button className="product-popup-create">Create</button>
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
            <div className="insights">
              <div className="info">
                <div className="info-name">Total Products</div>
                <div className="info-value">290</div>
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
                <div className="info-name">Total 3d view</div>
                <div className="info-value">500</div>
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
                <div className="info-value">870</div>
                <div className="info-view">
                  <a className="info-view-link" href="/analytics">
                    <span>See analytics report</span>
                    <img
                      className="sidenav-img info-img"
                      src={require("../assets/pngs/arrow.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='products'>
            <div className='recent-products'>
              Recent Products
            </div>
          </div>
        </div>
    </section>
    <TokenVerification />
  </div>
);
};
