import { useState } from 'react';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import { toast } from 'react-toastify';


export const Teams = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isTeammatePopUp, setisTeammatePopUp] = useState(false);
  const [isEditTeam, setisEditTeam] = useState(false);
  const [isEditRole, setisEditRole] = useState(false);

  const createTeamPopup = () => {
    setIsOpen(!isOpen);
  };

  const createTeamPopupCancel = () => {
    setIsOpen(!isOpen);
  };


  const TeammatePopUp = () => {
    setisTeammatePopUp(!isTeammatePopUp);
  };

  const cancelTeammatePopUp  = () => {
    setisTeammatePopUp(!isTeammatePopUp);
  };

  const editTeamPopup = () => {
    setisEditTeam(!isEditTeam);
  };

  const canceleditTeamPopup = () => {
    setisEditTeam(!isEditTeam);
  };

  const editRolePopup = () => {
    setisEditRole(!isEditRole);
  }

  const canceleditRolePopup = () => {
    setisEditRole(!isEditRole);
  }
  const InviteMemberPopup = () => (
    <div className="invite-member-popup">
        <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
        <div>You have invited member to your team successfully</div>
    </div>
)


const inviteMember = () => {
    toast(<InviteMemberPopup />, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      draggable: true,
      progress: undefined,
    //   theme : 'light',
      className : 'invite-member-toast'
    }) 
  }

  const DeletePopup = ()=>{
    return(
      <div className="team-delete-popup">
        <img src={require('../assets/pngs/warning.png')} alt="" />
        <div className='team-delete-popup-msg'>
        <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
        <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete this Team</p>
        <button className="team-popup-btn" style={{"border":"none"}}>Proceed</button>
        </div>
      </div>
    )
  }
  const handleDeleteTeamPopup = () =>{
    toast(<DeletePopup />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    className :' team-delete-toast'
  }) 
  }

  const DeleteMemberPopup = ()=>{
    return(
      <div className="team-delete-popup">
        <img src={require('../assets/pngs/warning.png')} alt="" />
        <div className='team-delete-popup-msg'>
        <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
        <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete this Member</p>
        <button className="team-popup-btn" style={{"border":"none"}} onClick={handleDeleteTeamMember}>Proceed</button>
        </div>
      </div>
    )
  }
  const handleDeleteMemberPopup = () =>{
    toast(<DeleteMemberPopup />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    className :' team-delete-toast'
  }) 
  }
  const DeleteTeamMember = ()=>{
    return (<div className="invite-member-popup">
    <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
    <div>You have deleted team member successfully</div>
</div>)
  }

  const handleDeleteTeamMember = ()=>{
    toast(<DeleteTeamMember/>, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  //   theme : 'light',
    className : 'invite-member-toast'
  }) 
  }

  const EditTeamRole = () =>{
    return(
      <div className="edit-teamrole-popup">
        <div className="edit-teamrole-heading">
          <div className="edit-teamrole-heading-main">
          <img src={require('../assets/pngs/warning.png')} alt="" />
          <p>Confirm Action</p>
          </div>
          <div style={{"fontSize":"12px"}}>User role! Are you sure you want to change this user role to memeber</div>
        </div>
        <div className='edit-teamrole-details'>
          <div> Name</div>
          <div className='edit-teamrole-details-bg'> Name2</div>
          <div> Email</div>
          <div className='edit-teamrole-details-bg'> member1@gmail.com</div>
        </div>
        <button className="team-popup-btn edit-teamrole-btn" >Proceed</button>
      </div>
    )
  }


  const handleEditTeamRole = () =>{
    toast(<EditTeamRole/>, {
      position: "top-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  //   theme : 'light',
    className : 'edit-teamrole-toast',
  }) 
  }
    return ( 
    <div className='home-container'>
            {isOpen && (
            <div className="addteam-popup">
              <div className="addteam-popup-main">
                <label htmlFor="" className="addteam-popup-label">
                  Enter Team Name
                </label>
                <input
                  type="text"
                  placeholder="New Product"
                  className="addteam-popup-input"
                />
                
              </div>
              <div className="addteam-popup-buttons">
                <button
                  className="addteam-popup-cancel"
                  onClick={createTeamPopupCancel}
                >
                  Cancel
                </button>
                <button className="addteam-popup-create">Create</button>
              </div>
            </div>

        
      )}
      {isEditTeam && (
            <div className="addteam-popup">
              <div className="addteam-popup-main">
                <label htmlFor="" className="addteam-popup-label">
                  Enter Team Name
                </label>
                <input
                  type="text"
                  placeholder="New Product"
                  className="addteam-popup-input"
                />
                
              </div>
              <div className="addteam-popup-buttons">
                <button
                  className="addteam-popup-cancel"
                  onClick={canceleditTeamPopup}
                >
                  Cancel
                </button>
                <button className="addteam-popup-create">Change Name</button>
              </div>
            </div>
      )}
      {isEditRole && (
            <div className="addteam-popup">
              <div className="edit-role-header">
                <div>Change Team Role</div>
                <div onClick={canceleditRolePopup} className='edit-role-cross'><img src={require('../assets/pngs/report-cross.png')} alt="" /></div>
              </div>
               <select name="" id="" className='edit-role-select'>
                <option value="">Owner</option>
                <option value="">Admin</option>
                <option value="">Member</option>
               </select>
              <div className="addteam-popup-buttons">
                <button
                  className="addteam-popup-cancel edit-role-cancel"
                  onClick={canceleditTeamPopup}
                >
                  Cancel
                </button>
                <button className="addteam-popup-create change-name" onClick={handleEditTeamRole}>Change Name</button>
              </div>
            </div>
      )}
      {isTeammatePopUp &&(
        <div className="teammate-popup">
          <div className="teammate-popup-main">
          <div className="teammate-popup-heading">Add a team mate</div>
            <div className="teammate-popup-top">
              <div>Name</div>
              <div>Email</div>
              <div></div>
              <div></div>
            </div>
            <div className="teammate-popup-bottom">
              <div style={{"gridColumn": "1/2"}}><input type="text" placeholder='Name'/></div>
              <div style={{"gridColumn": "2/3"}}><input type="text" placeholder='Email'/></div>
              <div style={{"gridColumn": "3/4"}}><input type="text" placeholder='Owner' style={{"alignSelf":"end"}}/></div>
              <div style={{"gridColumn": "4/5"}}><img className="" src={require('../assets/pngs/AddTeammate.png')} alt=""/></div>
            </div>

            <div className="teammate-popup-buttons">
            <button
              className="teammate-popup-cancel"
              onClick={cancelTeammatePopUp} style={{"gridColumn": "1/2"}}
            >
              Cancel
            </button>
            <button className="teammate-popup-create" style={{"gridColumn": "3/5"}} onClick={inviteMember}>Add Member</button>
          </div>
          </div>

        <div className="teammate-popup-phone">
          <div className='teammate-popup-heading'>Add a Team mate</div>
          <div className="teammate-popup-phone-email">
            <div >Email</div>
            <div><input type="text" placeholder='Email'/></div>
          </div>
          <div className="teammate-popup-phone-email">
            <div>Name</div>
              <div style={{"display":"flex", "gap":"5px"}}>
              <div><input type="text" placeholder='Name'/></div>
              <div><input type="text" placeholder='Owner'/></div>
              <img style={{"height":"100%"}} src={require('../assets/pngs/AddTeammate.png')} alt=""/>
              </div>
          </div>

          <div className="teammate-popup-buttons">
            <button
              className="teammate-popup-cancel" onClick={cancelTeammatePopUp} >
              Cancel
            </button>
            <button className="teammate-popup-create">Add Member</button>
          </div>
          <div>

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
                 <div className="analytics-header">
                    <span>Teams</span>
                    <button onClick={createTeamPopup} className="analytics-download-button">Create Team</button>
                 </div>
               </div>
             </div>
             </div>
             <div className="subscription">
                <div className="teams-all-block">
                    <div className="team-block">
                        <div className="team-header">
                            <span className="team-name-edit">
                                <div className="team-name">MomentumX team</div>
                                <img className="team-edit-button sidenav-img" src={require('../assets/pngs/edit.png')} alt="" onClick={editTeamPopup}/>
                            </span>
                            <div className="team-add-delete">

                                <button onClick={TeammatePopUp} className="team-add">
                                  <img className='team-plus-img' src={require('../assets/pngs/add.png')} alt="" />
                                  <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                                  <span className='team-add-text'>Add</span>
                                </button>

                                <button onClick={handleDeleteTeamPopup} className="team-delete">
                                  <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" />
                                  <span className="team-delete-text">Delete</span>
                                </button>
                            </div>
                        </div>
                            <div className="team-member-table">
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name '>Member 1</div>
                                    <div className='team-member-email '>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration' onClick={editRolePopup}>Owner</div>
                                    <div className='team-member-status'></div>
                                </div>
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name'>Member 2</div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration' onClick={editRolePopup}>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteMemberPopup}/></div>
                                </div>
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name'>Member 2
                                    <p>pending invite</p></div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration' onClick={editRolePopup}>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteMemberPopup}/></div>
                                </div>
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