export const Manage = () => {
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
            <a href="/account">
              <img
               src={require('../assets/pngs/account-icon.png')}
               alt="account-icon"
              /> Account
            </a>
            <a  href="teams">
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
              <a href="/">Dashboard</a>
              </div>
              <div className='item'>
              <a href="/products">Products</a>
              </div>
              <div className='item'>
              <a href="#">Analytics</a>
              </div>
              <div className='item'>
              <a href="/showroom">Showroom</a>
              </div>
              <div className='item'>
              <a href="/3d-fashion-lab">3D Fashion Lab</a>
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
                 <div className="analytics-header">
                    <span>View Showroom</span>
                    <a href="" className="analytics-download-button">Share</a>
                 </div>
               </div>
             </div>
             <div className="subscription">
               <div className="choose-plan">
                 Junior's Showroom
               </div>
               <div className="manage-block">
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
          </div>
        </div>
      </section>
    </div>
);
};