import { useState } from 'react';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';

export const Credit = () => {

    const [isOpen, setIsOpen] = useState(false);

    /*const productPopup = () => {
      setIsOpen(!isOpen);
    };*/

    const productPopupCancel = () => {
      setIsOpen(!isOpen);
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
    <Header />
      <div className='content'>
        <Sidenav />
           <div className='main'>
           <div className="main-header">
             <div className='text'>
               <div className='dashboard'>
                 Credit
               </div>
             </div>
             </div>
             <div className="subscription">
             <div className="choose-plan">
               Buy Credit
             </div>
             <div className="credit-block">
               <div className="credit-input-block">
                 <div className="credit-input">
                   <div className="credit-amount-heading">
                      Credit Amount
                   </div>
                   <div className="credit-input-unit">
                    <div className="credit-unit-buttons">
                      <button className="credit-minus-button">-</button>
                      <button className="credit-current-button">99</button>
                      <button className="credit-plus-button">+</button>
                    </div>
                    <div className="credit-unit-cost-block">
                      <div className="unit-cost">Unit Cost</div>
                      <div className="unit-price">$99</div>
                      <div className="coupon-code-block">
                        <input type="text" placeholder="enter coupon code" className="enter-code"/>
                        <button className="credit-coupon-apply">Apply</button>
                      </div>
                    </div>
                    <div className='credit-payment-back'>

                      <button onClick={()=>{}} className="credit-unit-payment">Proceed to payment</button>

                      <a className="payment-back-button" href="/account"><img src={require('../assets/pngs/left.png')} alt="back" />Back</a>

                    </div>
                   </div>
                 </div>
                 
               </div>
               <div className="credit-details-block">
                 <div className="credit-details-heading">Credit Breakdown</div>
                 <div className="credit-details">
                  <div className="credit-details-price">
                    <div className="credit-details-item">
                      <div className="credit-price-heading">Price</div>
                      <div className="credit-price-text">$1 = 5 Credits</div>
                    </div>
                    <div className="credit-details-item">
                      <div className="credit-price-heading">First time publishing</div>
                      <div className="credit-price-text">1 Credit/Mb</div>
                    </div>
                    <div className="credit-details-item">
                      <div className="credit-price-heading">Updating your project</div>
                      <div className="credit-price-text">1 Credit/MB for increase in bundle size (1 Credit minimum)</div>
                    </div>
                    <div className="credit-details-item">
                      <div className="credit-price-heading">Publish views</div>
                      <div className="credit-price-text">2,000 (Renewed at original publish cost after 2,000 views)</div>
                    </div>
                  </div>
                  <div className="credit-details-separator"></div>
                  <div className="credit-details-general">
                     <div className="credit-general-item">
                       <div className="credit-general-heading">Bandwidth</div>
                       <div className="credit-general-text">Outbound data transfer shared between your published websites to a user</div>
                     </div>
                     <div className="credit-general-item">
                       <div className="credit-general-heading">Exporting project</div>
                       <div className="credit-general-text credit-general-text-list">
                        <ul className="credit-general-list">
                          <li className="credit-list-item">(1 - 10MB) - 1 Credit</li>
                          <li className="credit-list-item">(11 - 50MB) - 5 Credits</li>
                          <li className="credit-list-item">(51 - 100MB) - 10 Credits</li>
                          <li className="credit-list-item">(101 - 500MB) - 15 Credits</li>
                          <li className="credit-list-item">(501 - 1000MB) - 20 Credits</li>
                          <li className="credit-list-item">(above 1000MB) - 25 Credits</li>
                        </ul>
                       </div>
                     </div>
                  </div>
                  <div></div>
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