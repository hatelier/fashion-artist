// import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import TokenVerification from '../components/auth';

export const PreviewProduct = () => {
    // const [cookies, setCookie] = useCookies(['access_token']);
    // const navigate = useNavigate();
    // const [firstName, setFirstName] = useState("");
    // const [occupation, setOccupation] = useState("");

    useEffect(() => {
      fetchUserData();
    }, []);

    const fetchUserData = async () => {
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
    };
    
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };
    const toggleDropdown3 = () => {
      setIsOpen3(!isOpen3);
    };
    const toggleDropdown4 = () => {
      setIsOpen4(!isOpen4);
    };
    const toggleDropdown5 = () => {
      setIsOpen5(!isOpen5);
    };
    const toggleDropdown6 = () => {
      setIsOpen6(!isOpen6);
    };

    /*const logout = () => {
      setCookie('access_token',"")
      window.localStorage.removeItem("userID");
      navigate("/auth");
    }*/

    return ( 
    <div>
       <div className='preview-page'>
        <div className='preview-block'>
            <div className='preview-main'>
            <div className='preview-sidemenu'>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown1}>
                 <span>Sleeves</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen1 && (
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown2}>
                 <span>Bottom Styles</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen2 && (
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown3}>
                 <span>Body</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen3 && (
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown4}>
                 <span>Neckline</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen4 && ( 
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown5}>
                 <span>Capes</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen5 && (
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                 <button className='preview-sidemenu-label' onClick={toggleDropdown6}>
                 <span>Accesories</span><img src={require('../assets/pngs/plus-white.png')} alt="" />
                 </button>
                 {isOpen6 && (
                  <div className="dropdown-menu">
                    <div>here</div>
                  </div>
                )}
              </div>
            </div>
            <div className='preview-area'>
              <div className='preview-view-ar'>View in AR</div>
              <div className='preview-model'></div>
            </div>
            <div className='preview-options'>
              {/* <div><a href=""><img src={require('../assets/pngs/preview-1.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-2.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-3.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-4.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-5.png')} alt="" /></a></div>
              <div><a href=""><img src={require('../assets/pngs/preview-6.png')} alt="" /></a></div> */}
            </div>
            </div>
            <img src={require('../assets/pngs/mx-logo-dark.png')} alt=""  className='preview-mtum-logo'/>
        </div>
       </div>
       <TokenVerification />
    </div>
);
};