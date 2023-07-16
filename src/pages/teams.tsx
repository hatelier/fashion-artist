// import axios from 'axios';
import { useEffect } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
import { toast } from 'react-toastify';


export const Teams = () => {
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [cookies, setCookie] = useCookies(['access_token']);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
    
      //This part //Token from cookies
    // const userID = window.localStorage.getItem('userID');

    /*const response = await axios.get("/user/profile", { 
      params: {
        userID: userID
      },
    });*/

    // const userData = response.data;

    // setFirstName(userData.firstname);
    // setOccupation(userData.occupation);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };


  /*const logout = () => {
    setCookie('access_token');
    window.localStorage.removeItem("userID");
    navigate("/auth");
  }*/








  const InviteMemberPopup = () => (
    <div className="invite-member-popup">
        <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
        <div>You have invited member to your team successfully</div>
    </div>
)


const inviteMember = () => {
    toast(<InviteMemberPopup />, {
        position: "top-center",
      autoClose: 3,
      hideProgressBar: true,
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
        <img className="sidenav-img" src={require('../assets/pngs/warning.png')} alt="" />
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
    autoClose: 3,
    hideProgressBar: true,
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
    autoClose: 3,
    hideProgressBar: true,
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
          <img className="sidenav-img" src={require('../assets/pngs/warning.png')} alt="" />
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
    className : 'edit-teamrole-toast'
  }) 
  }
    return ( 
    <div className='home-container'>
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
                    <button onClick={()=>{
                      //fetch from API
                    }} className="analytics-download-button">Create Team</button>
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
                                <img className="team-edit-button sidenav-img" src={require('../assets/pngs/edit.png')} alt="" onClick={handleEditTeamRole}/>
                            </span>
                            <span className="team-add-delete">

                                <button onClick={inviteMember} className="team-add">
                                  <img className='team-plus-img' src={require('../assets/pngs/add.png')} alt="" />
                                  <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                                  <span className='team-add-text'>Add</span>
                                </button>

                                <button onClick={handleDeleteTeamPopup} className="team-delete">
                                  <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" />
                                  <span className="team-delete-text">Delete</span>
                                </button>
                            </span>
                        </div>
                            <div className="team-member-table">
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name '>Member 1</div>
                                    <div className='team-member-email '>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration'>Owner</div>
                                    <div className='team-member-status'></div>
                                </div>
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name'>Member 2</div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration'>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteTeamMember}/></div>
                                </div>
                                <div className="team-member-row">
                                  <div className='team-member-name-email'>
                                    <div className='team-member-name'>Member 2
                                    <p>pending invite</p></div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    </div>
                                    <div className='team-member-rank team-text-decoration'>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteTeamMember}/></div>
                                </div>
                            </div>
                    </div>
                    <div className="team-block">
                        <div className="team-header">
                            <span className="team-name-edit">
                                <div className="team-name">MomentumX team</div>
                                <img className="team-edit-button sidenav-img" src={require('../assets/pngs/edit.png')} alt="" onClick={handleEditTeamRole}/>
                            </span>
                            <span className="team-add-delete">

                                <button onClick={inviteMember} className="team-add">
                                  <img className='team-plus-img' src={require('../assets/pngs/add.png')} alt="" />
                                  <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                                  <span className='team-add-text'>Add</span>
                                </button>

                                <button onClick={handleDeleteTeamPopup} className="team-delete">
                                  <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" />
                                  <span className="team-delete-text">Delete</span>
                                </button>
                            </span>
                        </div>
                            <div className="team-member-table">
                                <div className="team-member-row">
                                    <div className='team-member-name '>Member 1</div>
                                    <div className='team-member-email '>member_1@gmail.com</div>
                                    <div className='team-member-rank team-text-decoration'>Owner</div>
                                    <div className='team-member-status'></div>
                                </div>
                                <div className="team-member-row">
                                    <div className='team-member-name'>Member 2</div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    <div className='team-member-rank team-text-decoration'>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status sidenav-img' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteTeamMember}/></div>
                                </div>
                                <div className="team-member-row">
                                    <div className='team-member-name'>Member 2
                                    <p>pending invite</p></div>
                                    <div className='team-member-email'>member_1@gmail.com</div>
                                    <div className='team-member-rank team-text-decoration'>Admin</div>
                                    <div className='team-member-status'><img className='team-member-status sidenav-img' src={require("../assets/pngs/block-white.png")} alt="" onClick={handleDeleteTeamMember}/></div>
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