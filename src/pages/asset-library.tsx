export const Assets = () => {
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
                    <span>Asset Library</span>
                 </div>
               </div>
             </div>
             <div className="subscription">
               <div className="choose-plan">
                 All Assets
               </div>
               <input type="text" placeholder="Search assets" className="asset-search"/>
               <div className="manage-block asset-block">
                 <div className="asset-row">
                    <div className="asset-row-header">
                        <div className="asset-row-heading">Meshes</div>
                        <a href="" className="asset-see-all">See all</a>
                        </div>
                    <div className="asset-row-items">    
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
                 <div className="asset-row">
                    <div className="asset-row-header">
                        <div className="asset-row-heading">Materials</div>
                        <a href="" className="asset-see-all">See all</a>
                        </div>
                    <div className="asset-row-items">    
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
                 <div className="asset-row">
                    <div className="asset-row-header">
                        <div className="asset-row-heading">Textures</div>
                        <a href="" className="asset-see-all">See all</a>
                        </div>
                    <div className="asset-row-items">    
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
                 <div className="asset-row">
                    <div className="asset-row-header">
                        <div className="asset-row-heading">Annotation Files</div>
                        <a href="" className="asset-see-all">See all</a>
                        </div>
                    <div className="asset-row-items">    
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="asset-item">
                        <div className="asset-item-img"></div>
                        <div className="asset-item-details">
                            <div className="manage-item-name">Mesh</div>
                            <div className="manage-item-id-date">
                                {/* <div className="asset-drop-up">
                                    <img src={require('../assets/pngs/left-arrow.png')} alt="" />
                                    <img src={require('../assets/pngs/eye.png')} alt="" />
                                    <img src={require('../assets/pngs/duplicate.png')} alt="" />
                                    <img src={require('../assets/pngs/dustbin-transparent.png')} alt="" />
                                </div> */}
                                <div className="manage-item-id"><img src={require('../assets/pngs/three-dots.png')} alt="" /></div>
                            </div>
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