import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/header';

import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';

export const CreditHistory = () => {
    // const [cookies, setCookie] = useCookies(['access_token']);
    // const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [companyname, setCompanyName] = useState("");

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
      setLastName(userData.lastname);
      setCompanyName(userData.companyname);
      setEmail(userData.email);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    /*const logout = () => {
      setCookie('access_token',"")
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
    return ( 
      <div className='home-container'>
          <section >
              <Header />
          <div className='content'>
              <Sidenav />
              <div className='credit-main'>
                  <div className="credit-main-header">
                      <div className='credit-text'>
                          <div className='credit-dashboard'>
                          <a className='credit-back-button' href="/account">
                          <img src={require('../assets/pngs/back.png')} alt="back" />
                          </a>
                            
                            <div>Credit History</div>
                          </div>
                          <div className="credit-download-button">Download</div>
                      </div>
                  </div>
                  <div className="credit-history-table">
                      <div className="credit-history-table-header">
                          <div className="credit-history-date">Date</div>
                          <div className="credit-history-subscription">Quantity</div>
                          <div className="credit-history-amount">Amount</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">1000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">500</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
              
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">1000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">30000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                  </div>
              </div>
  
              </div>
          </section>
      </div>
  );
};