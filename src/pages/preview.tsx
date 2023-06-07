import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const PreviewProduct = () => {
    const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [occupation, setOccupation] = useState("");

    useEffect(() => {
      fetchUserData();
    }, []);

    const fetchUserData = async () => {
      try {
      const userID = window.localStorage.getItem('userID');
      const response = await axios.get("http://localhost:3001/user/profile", { 
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
    return ( 
    <div>
       <div className='preview-page'>
        <div className='preview-block'>
            <div className='preview-main'>
            <div className='preview-sidemenu'>
              <div>
                <div className='preview-sidemenu-label'><span>Sleeves</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
              <div>
                <div className='preview-sidemenu-label'><span>Bottom Styles</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
              <div>
                <div className='preview-sidemenu-label'><span>Body</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
              <div>
                <div className='preview-sidemenu-label'><span>Neckline</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
              <div>
                <div className='preview-sidemenu-label'><span>Capes</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
              <div>
                <div className='preview-sidemenu-label'><span>Accesories</span><img src={require('../assets/pngs/plus-white.png')} alt="" /></div>
              </div>
            </div>
            <div>
              <div className='preview-view-ar'>View in AR</div>
              <div className='preview-model'></div>
            </div>
            <div className='preview-options'>
              <div><a href=""><img src={require('../assets/pngs/preview-1.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-2.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-3.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-4.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-5.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-6.png')} alt="" /></a></div>
            </div>
            </div>
            <img src={require('../assets/pngs/mx-logo-dark.png')} alt=""  className='preview-mtum-logo'/>
        </div>
        <div className='preview-details'>
          <div className='preview-details-name'>Name</div>
          <div className='preview-cost'>
            <div className='preview-price'>$30</div>
            <div className='preview-tax'>Tax included</div>
          </div>
          <div className='preview-quantity-block'>
            <div className='preview-quantity'>Quantity</div>
            <div className="credit-unit-buttons">
              <button className="credit-minus-button">-</button>
              <button className="credit-current-button">99</button>
              <button className="credit-plus-button">+</button>
            </div>
          </div>
          <div className='preview-details-buttons'>
            <div className='preview-add-cart'>Add to cart</div>
            <div className='preview-buy-now'>Buy it now</div>
          </div>
        </div>
       </div>
    </div>
);
};