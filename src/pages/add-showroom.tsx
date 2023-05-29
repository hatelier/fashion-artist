export const AddShowroom = () => {
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
            <a href="/teams">
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
                 Showroom
               </div>
             </div>
             <div className="subscription">
             <div className="choose-plan add-showroom-header">
                <div>Add Showroom</div>
                <div className="add-showroom-create-cancel">
                    <a className="add-showroom-create">Create</a><a className="add-showroom-cancel" href="/showroom">Cancel</a>
                </div>
             </div>
             <div className="add-showroom-block">
                <div className="add-showroom-details">
                    <div className="add-showroom-heading">Showroom Details</div>
                        <div className="add-showroom-details-block">
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Showroom Name*</label>
                            <input type="text" />
                        </div>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Tags</label>
                            <input type="text" />
                        </div>
                        <div className="add-showroom-details-item">
                            <label htmlFor="">Logo</label>
                            <a href="" className="add-showroom-upload-button"><img src={require('../assets/pngs/upload-new.png')} alt="" /><span>Upload</span></a>
                        </div>
                        </div>  
                </div>
                <div className="add-showroom-layouts">
                    <div className="add-showroom-heading">Showroom Layout</div>
                    <div className="add-showroom-layouts-block">
                        <div className="add-showroom-font-text">
                            <div className="add-showroom-layout-products">
                                <label htmlFor="">#Products per row</label>
                                <div className="credit-unit-buttons">
                                  <button className="credit-minus-button">-</button>
                                  <button className="credit-current-button">9</button>
                                  <button className="credit-plus-button">+</button>
                                </div>
                            </div>
                            <div className="add-showroom-layout-font">
                                <label htmlFor="">Font Family</label>
                                <input type="text" placeholder="Add Tag" className="layout-font-input" />
                            </div>
                            <div className="add-showroom-layout-text">
                                <label htmlFor="">Text Color</label>
                                <div className="red-patch"><div className="red-patch-inside"></div></div>
                            </div>
                        </div>
                        <div className="add-showroom-separator"></div>
                        <div className="add-showroom-background">
                            <div className="add-showroom-background-heading">Background</div>
                            <div className="add-showroom-color-divider">
                                <div className="add-showroom-background-item">
                                    <label htmlFor="">Color</label>
                                    <div className="red-patch"><div className="red-patch-inside"></div></div>
                                </div>
                                <div className="add-showroom-background-item">
                                <label htmlFor="">Divider color</label>
                                <div className="red-patch"><div className="red-patch-inside"></div></div>
                                </div>
                            </div>
                            <div className="add-showroom-upload-style">
                                <div className="add-showroom-background-item">
                                <label htmlFor="">Upload image File</label>
                                <a href="" className="add-showroom-upload-button"><img src={require('../assets/pngs/upload-new.png')} alt="" /><span>Upload</span></a>
                                </div>
                                <div className="add-showroom-background-item">
                                <label htmlFor="">Image Style</label>
                                    <div className="add-showroom-cover"><span>Cover</span> <img src={require('../assets/pngs/down.png')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-showroom-products">
                    <div className="add-showroom-heading">Products</div>
                    <div className="add-showroom-products-block">
                        <div className="add-showroom-products-input">
                            <input type="text" placeholder="Search by product name"/>
                            <a href="" className="add-showroom-filter"><img src={require('../assets/pngs/filter-white.png')} alt="" /><span>Filter</span><img src={require('../assets/pngs/down-white.png')} alt="" /></a>
                        </div>
                        <div className="add-showroom-products-row">
                           <div>
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