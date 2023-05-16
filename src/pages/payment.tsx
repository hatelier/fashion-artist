export const Payment = () => {
    return ( 
    <div className='home-container'>
    <section >
      <header className="header">
        <img
        src={require('../assets/pngs/mx-logo.png')}
        alt="mxlogo"
        className="mx-logo"
        />
        <img
        src={require('../assets/pngs/bell-icon.png')}
        alt="bell-icon"
        className="bell-icon"
        />
        <div className="dropdown-top">
          <img
            src={require('../assets/pngs/small-avatar-icon.png')}
            alt="small-avatar-icon"
            className="small-avatar-icon dropbtn"
          />
          <div className="dropdown-top-content">
            <a href="#">
              <img
               src={require('../assets/pngs/account-icon.png')}
               alt="account-icon"
              /> Profile
            </a>
            <a  href="#">
              <img
                src={require('../assets/pngs/teams-icon.png')}
                alt="teams-icon"
              />Teams
            </a>
            <a href="#">
              <img
               src={require('../assets/pngs/headset-help-icon.png')}
               alt="help-icon"
              />Help Desk
            </a>
            <a href="#">
              <img
               src={require('../assets/pngs/logout-icon.png')}
               alt="help-icon"
              />Logout
            </a>
          </div>
        </div>
      </header>
      <div className='content'>
      <div className='sidenav'>
          <div className='upper-menu'>
            <div className="userblock">
              <div className="current-user">
                <div className="avatar">
                  <img src={require('../assets/pngs/user-icon.png')} alt="user-icon" />
                </div>
                <div className="user-details">
                  <div className="username">User Name</div>
                  <div className="occupation">Occupation</div>
                </div>
                <div className="arrow">
                  <img src={require('../assets/pngs/down.png')} alt="" />
                </div>
              </div>
              <div className="new-team">
                <img src={require('../assets/pngs/new-team.png')} alt="" />
                <div>New Team</div>
              </div>
            </div>
            <div>
              <button className="add-product">
                <img src={require('../assets/pngs/plus.png')} alt="add new product" />
                New Product
              </button>
            </div>
            <div className='submenu'>
              <div className='item'>
              <a href="#">Dashboard</a>
              </div>
              <div className='item'>
              <a href="#">Products</a>
              </div>
              <div className='item'>
              <a href="#">Analytics</a>
              </div>
              <div className='item'>
              <a href="#">Showroom</a>
              </div>
              <div className='item'>
              <a href="#">3D Fashion Lab</a>
              </div>
            </div>
          </div>  
          <div className="dropdown resource-menu">
            <div className="dropdown-content">
              <a href="#"><img src={require('../assets/pngs/tutorial.png')} alt="resources" /> Tutorials </a>
              <a href="#"><img src={require('../assets/pngs/documentation.png')} alt="resources" /> Documentation </a>
              <a href="#"><img src={require('../assets/pngs/api-plugins.png')} alt="resources" /> API & Plugins </a>
              <a href="#"><img src={require('../assets/pngs/feedback.png')} alt="resources" /> Feedback </a>
            </div>
            <div className="resources">
              <img src={require('../assets/pngs/resources.png')} alt="resources" /> Resources <img src={require('../assets/pngs/up.png')} alt="toggle" className="toggle" />
            </div>
          </div>
        </div>
           <div className='main'>
             <div className='text'>
               <div className='dashboard'>
               Payment
               </div>
             </div>
             <div className="subscription">
             <div className="choose-plan">
               Payment
             </div>
             <div className="payment">
               <div className="payment-details">
                  <div className="payment-details-block">
                    <div className="payment-details-brief">
                      <div className="try-momentumx">Try MomentumX Platform</div>
                      <div className="days-free">14 days free</div>
                      <div className="per-month">Then $ 99 per month</div>
                    </div>
                    <div className="payment-details-again">
                      <div className="try-momentumx-again">MomentumX Platform</div>
                      <div className="days-months">
                        <div className="days-free-again">14 days free</div>
                        <div className="per-month-again">$99.00 / month after</div>
                      </div>
                    </div>
                    <div className="payment-details-info">
                      <div className="payment-info-item bold"><span className="alignleft">Subtotal</span><span className="alignright">$99.00</span></div>
                      <div className="payment-info-item"><span className="alignleft">VAT (19%)</span><span className="alignright">$18.01</span></div>
                      <div className="payment-info-item"><span className="alignleft">Total after trial</span><span className="alignright">$117.01</span></div>
                      <div className="payment-info-item bold"><span className="alignleft">Total after today</span><span className="alignright">$0.00</span></div>
                    </div>
                    <div className="payment-back-button"><img src={require('../assets/pngs/left.png')} alt="back" /> Back</div>
                  </div>
                </div>
                <div className="payment-details-input">
                  <div className="enter-details">Enter payment details</div>
                  <div className="payment-input-block">
                    <div className="payment-block-item">
                      <label htmlFor="" className="payment-item-label">Email address</label>
                      <input type="text" className="payment-input-item" placeholder="Enter email address"/>
                    </div>
                    <div className="payment-block-item">
                      <label htmlFor="" className="payment-item-label">Credit card number</label>
                      <input type="text" className="payment-input-item" placeholder="xxxx xxxx xxxx xxxx"/>
                    </div>
                    <div className="payment-block-item-horizontal">
                      <div>
                        <label htmlFor="" className="payment-item-label">Expiry date</label>
                        <input type="text" className="payment-input-item" placeholder="mm/yy"/>
                      </div>
                      <div>
                        <label htmlFor="" className="payment-item-label">CVV</label>
                        <input type="text" className="payment-input-item" placeholder="xxx"/>
                      </div>
                    </div>
                    <div className="payment-block-item">
                      <label htmlFor="" className="payment-item-label">Name on card</label>
                      <input type="text" className="payment-input-item" placeholder="enter your name" />
                    </div>
                    <div className="payment-block-item">
                      <label htmlFor="" className="payment-item-label">Billing address</label>
                      <input type="text" className="payment-input-item" placeholder="eg: floor no., flat no., colony"/>
                    </div>
                    <div className="save-details"><input type="checkbox" name="save-detail" id="save-details"/> Save my card's details</div>
                  </div>
                  <div className="start-trial-button">Start Trial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
};