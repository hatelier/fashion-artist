// import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import TokenVerification from '../components/auth';
// import { toast } from 'react-toastify';
import axiosInstance from '../components/axiosInstance';
import axios from 'axios';
// import axios, { AxiosError } from 'axios';


export const Teams = () => {
  // const [firstName, setFirstName] = useState("");
  // const [occupation, setOccupation] = useState("");
  
  // const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([{ _id: '', name: '', userId: '', members: [], __v: 0 }]);
  const [currentTeamPopup, setCurrentTeamPopup] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [isMemberPopupOpen, setIsMemberPopupOpen] = useState(false);
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberRank, setMemberRank] = useState('Owner');
  const [teamMembers, setTeamMembers] = useState<{ [teamId: string]: { _id: string; name: string; email: string; rank: string }[] }>({});
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [isRemoveMemberPopupOpen, setIsRemoveMemberPopupOpen] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState('');
  
  

  const fetchTeamMembers = useCallback(async (teamId: string) => {
    try {
      const response = await axiosInstance.get(`/team/${teamId}/get`);
      const membersData = response.data;
      setTeamMembers((prevTeamMembers) => ({ ...prevTeamMembers, [teamId]: membersData }));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
        // The team is not found, ignore the error
        return;
      }
      console.error(error);
    }
    }, []);

    const fetchTeams = useCallback(async () => {
    const userID = window.localStorage.getItem('userID');
    try {
      const response = await axiosInstance.get('/team/getteams', { params: { userId: userID }});
      const teamData = response.data;
      setTeams(teamData);
      // Fetch team members for each team
      if (teamData.length > 0) {
        teamData.forEach((team: { _id: string }) => {
          fetchTeamMembers(team._id);
        });
      }
      } catch (error) {
      console.error('Error fetching teams' ,error);
      }
    }, [fetchTeamMembers]);

  const fetchTeamMembersData = useCallback(async () => {
    const teamIds = teams.map((team) => team._id);
    for (const teamId of teamIds) {
      // Check if the team still exists before fetching its members
      const existingTeam = teams.find((team) => team._id === teamId);
      if (existingTeam) {
        await fetchTeamMembers(teamId);
      }
    }
  }, [fetchTeamMembers, teams]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTeams();
      await fetchTeamMembersData();
    };
    fetchData();
  }, [fetchTeams, fetchTeamMembersData]);

  const handleCreateTeam = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const HandleSubmitPopup = async (teamName: string) => {
    const userID = window.localStorage.getItem('userID');
    
    try {
      await axiosInstance.post('/team/newTeam', { name: teamName, userId: userID });
      setIsPopupOpen(false);
    } catch (error) {
      console.error('Error adding team name', error);
    }
  };

  const openPopup = (teamId: string) => {
    setSelectedTeamId(teamId);
    setCurrentTeamPopup(true);
  };

  const closePopup = () => {
    setCurrentTeamPopup(false);
    setNewTeamName('');
    setSelectedTeamId('');
  };

  const updateTeamName = async () => {
    try {
      await axiosInstance.put(`/team/update/${selectedTeamId}`, { name: newTeamName });
      // Fetch the updated list of teams
      fetchTeams();
      closePopup();
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };

  const openMemberPopup = (teamId: string) => {
    setIsMemberPopupOpen(true);
    setSelectedTeamId(teamId);
  };
  
  const closeMemberPopup = () => {
    setIsMemberPopupOpen(false);
    setMemberName('');
    setMemberEmail('');
    setMemberRank('');
  };
  const addTeamMember = async () => {
    try {
      // Validate the input and ensure memberRank is not empty
      if (!memberName || !memberEmail ) {
        console.error('Member data is incomplete');
        return;
      }
      const response = await axiosInstance.post(`/team/${selectedTeamId}/members`, {
        name: memberName,
        email: memberEmail,
        rank: memberRank,
      });
      console.log(response);
      // Fetch the updated team with the added member
      const updatedTeam = response.data;
  
      // Update the teams state with the updated team
      setTeams((prevTeams) =>
        prevTeams.map((team) => (team._id === updatedTeam._id ? updatedTeam : team))
      );
      
      closeMemberPopup();
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };
  
  const openDeleteConfirmation = (teamId: string) => {
    setSelectedTeamId(teamId);
    setIsDeleteConfirmationOpen(true);
  };

  const deleteTeam = async () => {
    try {
      // Call the delete team API endpoint
      await axiosInstance.delete(`/team/remove/${selectedTeamId}`);

      // Update the teams state or perform any necessary actions

      // Close the delete confirmation popup
      setIsDeleteConfirmationOpen(false);
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  const cancelDelete = () => {
    setIsDeleteConfirmationOpen(false);
  };

  const openRemoveMemberPopup = (teamId: string, memberId: string) => {
    setSelectedTeamId(teamId);
    setSelectedMemberId(memberId);
    setIsRemoveMemberPopupOpen(true);
  };
  
  const closeRemoveMemberPopup = () => {
    setSelectedTeamId('');
    setSelectedMemberId('');
    setIsRemoveMemberPopupOpen(false);
  };

  const removeMember = async () => {
    try {
      const response = await axiosInstance.delete(`/team/${selectedTeamId}/members/${selectedMemberId}`);
           
      // Fetch the updated team with the removed member
      const updatedTeam = response.data;
      
      // Update the teams state with the updated team
      setTeams((prevTeams) =>
        prevTeams.map((team) => (team._id === updatedTeam._id ? updatedTeam : team))
      );
      
      closeRemoveMemberPopup();
    } catch (error) {
      console.error('Error removing team member:', error);
    }
  };
  

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
    // try {
    
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
  //   } catch (error) {
  //     console.error("Error fetching user data: ", error);
  //   }
  // };


  /*const logout = () => {
    setCookie('access_token');
    window.localStorage.removeItem("userID");
    navigate("/auth");
  }*/








//   const InviteMemberPopup = () => (
//     <div className="invite-member-popup">
//         <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
//         <div>You have invited member to your team successfully</div>
//     </div>
// )


// const inviteMember = () => {
//     toast(<InviteMemberPopup />, {
//         position: "top-center",
//       autoClose: 3,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     //   theme : 'light',
//       className : 'invite-member-toast'
//     }) 
//   }

  // const DeletePopup = ()=>{
  //   return(
  //     <div className="team-delete-popup">
  //       <img className="sidenav-img" src={require('../assets/pngs/warning.png')} alt="" />
  //       <div className='team-delete-popup-msg'>
  //       <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
  //       <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete this Team</p>
  //       <button className="team-popup-btn" style={{"border":"none"}}>Proceed</button>
  //       </div>
  //     </div>
  //   )
  // }
  // const handleDeleteTeamPopup = () =>{
  //   toast(<DeletePopup />, {
  //     position: "top-center",
  //   autoClose: 3,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   className :' team-delete-toast'
  // }) 
  // }


//   const DeleteTeamMember = ()=>{
//     return (<div className="invite-member-popup">
//     <img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/>
//     <div>You have deleted team member successfully</div>
// </div>)
//   }

//   const handleDeleteTeamMember = ()=>{
//     toast(<DeleteTeamMember/>, {
//       position: "top-center",
//     autoClose: 3,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   //   theme : 'light',
//     className : 'invite-member-toast'
//   }) 
//   }

  // const EditTeamRole = () =>{
  //   return(
  //     <div className="edit-teamrole-popup">
  //       <div className="edit-teamrole-heading">
  //         <div className="edit-teamrole-heading-main">
  //         <img className="sidenav-img" src={require('../assets/pngs/warning.png')} alt="" />
  //         <p>Confirm Action</p>
  //         </div>
  //         <div style={{"fontSize":"12px"}}>User role! Are you sure you want to change this user role to memeber</div>
  //       </div>
  //       <div className='edit-teamrole-details'>
  //         <div> Name</div>
  //         <div className='edit-teamrole-details-bg'> Name2</div>
  //         <div> Email</div>
  //         <div className='edit-teamrole-details-bg'> member1@gmail.com</div>
  //       </div>
  //       <button className="team-popup-btn edit-teamrole-btn" >Proceed</button>
  //     </div>
  //   )
  // }


  // const handleEditTeamRole = () =>{
  //   toast(<EditTeamRole/>, {
  //     position: "top-center",
  //   autoClose: false,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // //   theme : 'light',
  //   className : 'edit-teamrole-toast'
  // }) 
  // }
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
                    <button onClick={handleCreateTeam} className="analytics-download-button">Create Team</button>
                 </div>
                 {isPopupOpen && (
                  <div className="product-popup">
                    <div className="product-popup-main">
                      <label htmlFor="" className="product-popup-label">Team Name</label>
                      <input type="text" placeholder="New Team" className="product-popup-input"  value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}/>
                    </div>
                    <div className="product-popup-buttons">
                      <button className="product-popup-cancel" onClick={handleClosePopup}>Cancel</button>
                      <button className="product-popup-create" onClick={() => HandleSubmitPopup(teamName)}>Create</button>
                    </div>
                  </div>
                )}
               </div>
             </div>
             </div>
             <div className="subscription">
                <div className="teams-all-block">
                {teams.length > 0 ? 
                (
                teams.map((team) => (
                  <div className="team-block" key={team._id}>
                    <div className="team-header">
                      <span className="team-name-edit">
                        <span className="team-name">{team.name}</span>
                        <button onClick={() => openPopup(team._id)} className="team-edit-button">
                          Edit
                        </button>
                      </span>
                      <span className="team-add-delete">
                        <button className="team-add" onClick={() => openMemberPopup(team._id)}>
                          <img className='team-plus-img' src={require('../assets/pngs/plus.png')} alt="" />
                          <img className='team-member-add-img' src={require('../assets/pngs/add-member.png')} alt="" /> 
                          <span className='team-add-text'>Add</span>
                        </button>
                        <button className="team-delete" onClick={() => openDeleteConfirmation(team._id)}>
                          <img className="team-delete-img" src={require('../assets/pngs/dustbin.png')} alt="" />
                          <span className="team-delete-text">Delete</span>
                        </button>
                      </span>
                    </div>
                    <div className="team-details">
                    {teamMembers[team._id] && teamMembers[team._id].length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {teamMembers[team._id].map((teamMember) => (
                        <li key={teamMember._id}
                        style={{
                          display: 'flex',
                          marginBottom: '10px',
                          border: 'none', // Remove border
                          background: 'none', // Remove background
                          padding: 0, // Remove padding
                        }}
                        >
                          <span style={{ marginRight: '100px' }}>{teamMember.name}</span>
                          <span style={{ marginRight: '100px' }}>{teamMember.email}</span>
                          <span>{teamMember.rank}</span>
                          {teamMember.rank !== 'Owner' && (
                          <button onClick={() => openRemoveMemberPopup(team._id, teamMember._id)}>
                            Remove
                          </button>
                          )}
                        </li>
                        ))}
                      </ul>
                      ) : (
                      <p>No team members found.</p>
                      )}
                  </div>
                  </div>
                ))
                ) : (
                  <p>No teams found.</p>
                )}
                {currentTeamPopup && (
                <div className="popup">
                  <input
                    type="text"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                  />
                  <button onClick={updateTeamName}>Update</button>
                  <button onClick={closePopup}>Cancel</button>
                </div>
              )}
              {isMemberPopupOpen && (
              <div className="popup">
                <label htmlFor="member-name">Name:</label>
                <input type="text" id="member-name" value={memberName} onChange={(e) => setMemberName(e.target.value)} />

                <label htmlFor="member-email">Email:</label>
                <input type="email" id="member-email" value={memberEmail} onChange={(e) => setMemberEmail(e.target.value)} />

                <label htmlFor="member-rank">Rank:</label>
                <select id="member-rank" value={memberRank} onChange={(e) => setMemberRank(e.target.value)}>
                  <option value="Owner">Owner</option>
                  <option value="Admin">Admin</option>
                  <option value="Member">Member</option>
                </select>


                <button onClick={addTeamMember}>Add Member</button>
                <button onClick={closeMemberPopup}>Cancel</button>
              </div>
              )}
              {isDeleteConfirmationOpen && (
                <div className="delete-confirmation-popup">
                  <p>Are you sure you want to delete this team?</p>
                  <div>
                    <button onClick={deleteTeam}>Proceed</button>
                    <button onClick={cancelDelete}>Cancel</button>
                  </div>
                </div>
              )}
              {isRemoveMemberPopupOpen && (
                <div className="popup">
                  <p>Are you sure you want to remove this team member?</p>
                  <button onClick={removeMember}>Yes</button>
                  <button onClick={closeRemoveMemberPopup}>No</button>
                </div>
              )}

                    {/* <div className="team-block">
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
                          <table className="team-member-table">
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 1</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Owner</td>
                                    <td className='team-member-status'></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Admin</td>
                                    <td className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                                <tr className="team-member-row">
                                    <td className='team-member-name'>Member 2</td>
                                    <td className='team-member-email'>member_1@gmail.com</td>
                                    <td className='team-member-rank'>Admin</td>
                                    <td className='team-member-status'><img className='team-member-status' src={require("../assets/pngs/block.png")} alt="" /></td>
                                </tr>
                          </table>
                    </div> */}
                </div>
            </div>
          </div>
        </div>
      </section>
      <TokenVerification />
    </div>
);
};