// import axios from 'axios';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import axiosInstance from '../components/axiosInstance';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const Analytics = () => {
    // const [cookies, setCookie] = useCookies(['access_token']);
    // const navigate = useNavigate();
    // const [firstName, setFirstName] = useState("");
    // const [occupation, setOccupation] = useState("");
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [threeDViewCount, setthreeDViewCount] = useState([]);
    const [arViewCount, setArViewCount] = useState([]);
    const [mostViewedProduct, setMostViewedProduct] = useState(null);
    const [engagementPercentage, setEngagementPercentage] = useState(0);
    const [avgInteraction, setAvgInteraction] = useState(0);
    const [range, setRange] = useState('day');
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState({ location: '', productName: '' });
  
    const handleSearch = useCallback(async () => {
      try {
        const response = await axiosInstance.get(`/analytics/product/search/${encodeURIComponent(searchText)}`);
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error searching products', error);
      }
    }, [searchText]);
    
    useEffect(() => {
      // fetchUserData();
      fetchThreeDViewCounts(selectedPeriod);
      fetchARViewCount(selectedPeriod);
      fetchMostViewedProduct();
      fetchEngagementPercentage();
      fetchAvgInteraction();

      if (searchText.trim() !== '') {
        handleSearch();
      } else {
        setProducts({ location: '', productName: '' });
      }
    }, [selectedPeriod, searchText, handleSearch]);

    // const fetchUserData = async () => {
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
    // };

    /*const logout = () => {
      setCookie('access_token',"")
      window.localStorage.removeItem("userID");
      navigate("/auth");
    }*/

    const [isOpen, setIsOpen] = useState(false);

    // const productPopup = () => {
    //   setIsOpen(!isOpen);
    // };

    const productPopupCancel = () => {
      setIsOpen(!isOpen);
    };

    const fetchThreeDViewCounts = async (period: string) => {
      try {
        const response = await axiosInstance.get(`/analytics/threeDViewCount/${period}`);
        const data = response.data;
        setthreeDViewCount(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchARViewCount = async (period: string) => {
      try {
        const response = await axiosInstance.get(`/analytics/arViewCount/${period}`);
        const count = response.data;
        setArViewCount(count);
      } catch (error) {
        console.error('Error fetching AR view count', error);
      }
    };

    const handlePeriodChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const period = event.target.value;
      setSelectedPeriod(period);
      fetchThreeDViewCounts(period);
    };

    const handleARPeriodChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const period = event.target.value;
      setSelectedPeriod(period);
      fetchARViewCount(period);
    };

    const fetchMostViewedProduct = async () => {
      try {
        const response = await axiosInstance.get('/analytics/most-viewed');
        const data = response.data;
        setMostViewedProduct(data);
      } catch (error) {
        console.error('Error fetching most viewed product', error);
      }
    };


    const fetchEngagementPercentage = async () => {
      try {
        const response = await axiosInstance.get('/analytics/user-engagement');
        const percentage = response.data.engagementPercentage;
        setEngagementPercentage(percentage);
      } catch (error) {
        console.error('Error fetching engagement percentage', error);
      }
    };

    const fetchAvgInteraction = async () => {
      try {
        const response = await axiosInstance.get('/analytics/average-interaction');
        const interactions = response.data.averageInteractions;
        setAvgInteraction(interactions);
      } catch (error) {
        console.error('Error fetching engagement percentage', error);
      }
    };

    const Report = async () => {
      try {
        const response = await axiosInstance.get('/analytics/average-interaction');
        const interactions = response.data.averageInteractions;
        setRange(interactions);
      } catch (error) {
        console.error('Error fetching engagement percentage', error);
      }
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
      <section>
      <Header />
        <div className='content'>
          <Sidenav />
            <div className='main height-100vh'>
            <div className="main-header">
              <div className='text'>
                <div className='dashboard'>
                  <div className="analytics-header">
                      <span>Analytics</span>
                      <button onClick={()=>{}} className="analytics-download-button">Download</button>
                  </div>
                </div>
              </div>
              </div>
              <div className="analytics-block-main">
                <div className="analytics-block">
                  <div className="analytics-report-block">
                    <div className="analytics-report">
                      <div className="analytics-report-header">
                          <div className="analytics-report-header-text">Report</div>
                          <div className="analytics-report-header-buttons">
                              <button onClick={()=>{}}>Product Report</button>
                              <button onClick={()=>{}} style={{"backgroundColor":"transparent"}}>Reset</button>
                          </div>
                          </div>

                        <div className="analytics-selections">
                          <div className='analytics-selections-element'>
                            <label htmlFor="range">By Date Range</label>
                              <select value={range} onChange={Report}>
                                <option value="">Day</option>
                                <option value="">Week</option>
                                <option value="">Month</option>
                              </select>
                          </div>
                          <div className='analytics-selections-element'>
                          <label htmlFor="teams">By Teams</label>
                            <select value={range}>
                              <option value="">Day</option>
                              <option value="">Week</option>
                              <option value="">Month</option>
                            </select>
                          </div>
                          <div className='analytics-selections-element'>
                          <label htmlFor="showroom">By Showroom</label>
                            <select value={range}>
                              <option value="">Day</option>
                              <option value="">Week</option>
                              <option value="">Month</option>
                            </select>
                          </div>
                          <div className='analytics-selections-element'>
                            <label htmlFor="product">By Product</label>
                            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                          </div>
                        </div>

                        <div className="analytics-report-3">
                          <div className="analytics-report-item">
                            <input type='checkbox'/>
                            <img src={require('../assets/pngs/rectangle.png')} alt="back" />
                            <p>Product Name</p>
                          </div>

                          <div className="analytics-report-item">
                            <input type='checkbox'/>
                            <img src={require('../assets/pngs/rectangle.png')} alt="" />
                            <p>Product Name</p> 
                          </div>

                          <div className="analytics-report-item">
                            <input type='checkbox'/>
                            <img src={require('../assets/pngs/rectangle.png')} alt="back" />
                            <p>Product Name</p>
                          </div>
                      

                        </div>
                        <div className="analytics-report-pagination">
                            <img src={require('../assets/pngs/back.png')} alt="" className='sidenav-img'/>
                            <div className='analytics-pagination-count'> 
                              <div>1</div>
                              <div>2</div>
                              <div>3</div>
                              <div>4</div>
                              <div>5</div>
                            </div>
                            <img src={require('../assets/pngs/back.png')} alt="" className='sidenav-img' style={{"transform": "rotate(180deg)"}}/>
                    </div>
                    </div>
                  </div>
                  <div className="analytics-secondary-block">
                    <div className="analytics-secondary-top">
                      <div className="analytics-3d-views">
                      <div className="period-selection">
                        <p>Total 3D view</p>
                        <select value={selectedPeriod} onChange={handlePeriodChange}>
                          <option value="day">Day</option>
                          <option value="week">Week</option>
                          <option value="month">Month</option>
                        </select>
                      </div>
                      <div className='analytics-linechart-container'>
                        {/* <LineChart width={250} height={350} data={threeDViewCount} className='analytics-linechart'>
                          <XAxis dataKey="date" 
                          tickFormatter={(dateStr) => {
                            const date = new Date(dateStr);
                            const options = { month: 'long', day: 'numeric' } as const;
                            return date.toLocaleString('en-US', options);  
                          }}
                          /> */}
                          {/* width={400} height={350} */}
                          {/* <CartesianGrid stroke='#ccc' />
                          <Tooltip />
                          <Legend />
                          <Line type='monotone' dataKey='count' stroke='blue' name='Views'/>
                          <YAxis />
                        </LineChart> */}
                        {/* <img src={require('../assets/pngs/graph3dview.png')} alt="back" className='analytics-linechart' /> */}
                        </div>
                      </div>
                      <div className="analytics-stats">
                          <div className="analytics-user-engagement">
                              <div className="analytics-stats-heading">All User Engagement</div>
                              <div className='analytics-stats-main'>
                                  <img src={require('../assets/pngs/analytics-img.png')} alt="" className='sidenav-img'/>
                                  <span className='analytics-stats-number'>{engagementPercentage} %</span>
                              </div>
                          </div>
                          <div className="analytics-average-interaction">
                              <div className="analytics-stats-heading">No. of Average Interaction</div>
                              <div className='analytics-stats-main'>
                                  <img src="" alt="" />
                                  <span className='analytics-stats-number'>{avgInteraction}</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="analytics-secondary-bottom">
                      <div className="analytics-most-viewed">
                      <div>Most viewed product</div>
                      {/* {mostViewedProduct && (
                        <img src={mostViewedProduct} style={{ marginTop: '10px', marginLeft: '5px' }} height={350} width={280} alt="Most Viewed Product" />
                        )} */}
                        <div className="analytics-most-viewed-img">
                        <img src={require('../assets/pngs/mostviewproduct.png')} alt="back" className='analytics-linechart' style={{"height":"100%"}}/>
                        <div className='analytics-download-button analytics-product-report-btn'>Product Report</div>
                        </div>
                      </div>
                      <div className="analytics-ar-views">
                      <div className="period-selection">
                        <p>Total AR views</p>
                        <select value={selectedPeriod} onChange={handleARPeriodChange}>
                          <option value="day">Day</option>
                          <option value="week">Week</option>
                          <option value="month">Month</option>
                        </select>
                      </div>
                      {/* <LineChart width={250} height={350} data={arViewCount}>
                          <XAxis dataKey="date" 
                          tickFormatter={(dateStr) => {
                            const date = new Date(dateStr);
                            const options = { month: 'long', day: 'numeric' } as const;
                            return date.toLocaleString('en-US', options);  
                          }}
                          />
                          <CartesianGrid stroke='#ccc' />
                          <Tooltip />
                          <Legend />
                          <Line type='monotone' dataKey='count' name='Views' stroke='blue'/>
                          <YAxis />
                          <Legend wrapperStyle={{ display: 'none' }} />
                        </LineChart> */}
                        <img src={require('../assets/pngs/totalARview.png')} alt="back" className='analytics-linechart' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
);
};