import { useCallback, useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import {axiosInstance} from '../components/axiosInstance';
import { useParams } from 'react-router-dom';

interface Product {
  _id: string;
  productName: string;
  previewImage: {
    location: string;
  };
  previewImageLocation: string;
}

export const Manage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {showroomId} = useParams();
    const [showroomName, setShowroomName] = useState('');
    
    const fetchProducts = useCallback((async () => {
      
      try {
        const response = await axiosInstance.post(`/showroom/${showroomId}/products`);
        setProducts(response.data.products);
        setShowroomName(response.data.showroomName);
      } catch (error) {
        console.error(error);
      }
    }),[showroomId]);
    
    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

    // const [isOpen, setIsOpen] = useState(false);

    /*const productPopup = () => {
      setIsOpen(!isOpen);
    };*/

    // const productPopupCancel = () => {
    //   setIsOpen(!isOpen);
    // };
    const [isSharing, setIsSharing] = useState(false);
    const sharePopup = () => {
      setIsSharing(!isSharing);
    };
  
    const sharePopupCancel = () => {
      setIsSharing(!isSharing);
    };
    return ( 
    <div className='home-container'>
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
    <section >
    <Header />
      <div className='content'>
        <Sidenav />
           <div className='main'>
            <div className="main-header">
             <div className='text'>
               <div className='dashboard'>
                 <div className="analytics-header manage-text">
                    <span>{showroomName}'s Showroom</span>
                    <button onClick={sharePopup} className="analytics-download-button">Share</button>
                 </div>
               </div>
             </div>
             </div>
             <div className="subscription">
             {/* {products && products.map((product) => (
    <div key={product._id} className="manage-item">
      <div className="manage-item-img">
        <img src={product.previewImageLocation} alt={product.productName} height={50} width={50} />
      </div>
      <div className="manage-item-details">
        <div className="manage-item-name">{product.productName}</div>
        <div className="manage-item-id-date">
          <div className="manage-item-id">Product Id: {product._id}</div>
          <div className="manage-item-date"></div>
        </div>
      </div>
    </div>
))} */}

              </div>
             <div className="manage">
               <div className="choose-plan manage-text">
                 Junior's Showroom
               </div>
               <div className="manage-block">
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img">
                          <img src= {require('../assets/pngs/threeD.png')} alt="" />
                        </div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    {products && products.map((product) => (
    <div key={product._id} className="manage-item">
      <div className="manage-item-img">
        <img src={product.previewImageLocation} alt={product.productName} height={50} width={50} />
      </div>
      <div className="manage-item-details">
        <div className="manage-item-name">{product.productName}</div>
        <div className="manage-item-id-date">
          <div className="manage-item-id">Product Id: {product._id}</div>
          <div className="manage-item-date"></div>
        </div>
      </div>
    </div>
))}
                  </div>
                </div>

                 <div className="manage-row">
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="manage-row">
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-item">
                        <div className="manage-item-img"></div>
                        <div className="manage-item-details">
                            <div className="manage-item-name">Product name</div>
                            <div className="manage-item-id-date">
                                <div className="manage-item-id">Product Id: user01_1274</div>
                                <div className="manage-item-date">20/04/2023</div>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
      </section>
      <TokenVerification />
    </div>
);
};