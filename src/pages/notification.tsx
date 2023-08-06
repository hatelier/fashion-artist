import { toast } from "react-toastify";
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';

interface UserData {
  firstname: string;
  currentDate: string;
  loginTime: string;
  notificationId: string;
}
 
const NotificationItem: React.FC<UserData> = ({ firstname, currentDate, loginTime, notificationId}) => {

    const Msg = () => (
        <div className = "delete-notification-msg">
            <div><img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/></div>
            <div>Notification deleted successfully</div>
        </div>
    )


    const deleteSingleNotification = () => {
        toast(<Msg />, {
            position: "top-center",
          autoClose: 3,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        //   theme : 'light',
          className : 'delete-notification-toast'
        }) 
        // handleDeleteNotification();
      }

      const DeletePopup = ()=>{
        return(
          <div className="team-delete-popup">
            <img src={require('../assets/pngs/warning.png')} alt="" />
            <div className='team-delete-popup-msg'>
            <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
            <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete this notification</p>
            <button className="team-popup-btn" style={{"border":"none"}} onClick={deleteSingleNotification }>Proceed</button>
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

    return(
        <div className="notification-container">
            <div className="notification-check-box">
                <input type="checkbox" />
            </div>
            <div className="notification-details">
                <div className="notification-details-heading">Hello {firstname}</div>
                {/* <div className="notification-details-content">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div> */}
                <div className="notification-details-timestamp">
                    <div className="notification-timestamp-date">{currentDate}</div>
                    <div className="notification-timestamp-date">{loginTime}</div>
                </div>
            </div>
            <div className="notification-delete">

                <img src={require('../assets/pngs/dustbin.png')} alt="delete" className='sidenav-img' onClick={handleDeleteTeamPopup}/>
            </div>
        </div>
    )
}



export const Notification = () => {

    const Msg = () => (
        <div className = "delete-notification-msg">
            <div><img src={require('../assets/pngs/tick1.png')} alt="" className='sidenav-img'/></div>
            <div>All Notification deleted successfully</div>
        </div>
        
    )
 

    const deleteAllNotification = () => {
        toast(<Msg />, {
            position: "top-center",
          autoClose: 3,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme : 'light',
          className : 'delete-notification-toast',
        });
        
      }

      const DeletePopup = ()=>{
        return(
          <div className="team-delete-popup">
            <img src={require('../assets/pngs/warning.png')} alt="" />
            <div className='team-delete-popup-msg'>
            <p style={{"fontSize":"20px", "color" : "var(--font-color"}}>Confirmation Action</p>
            <p style={{"fontSize":"12px", "color" : "var(--font-color"}}>Delete! Are you sure want to delete All notification</p>
            <button className="team-popup-btn" style={{"border":"none"}} onClick={deleteAllNotification }>Proceed</button>
            </div>
          </div>
        )
      }
      const handleDeleteTeamPopup = () =>{
        toast(<DeletePopup />, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        className :' team-delete-toast'
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
                            Notification
                        </div>
                    </div>
                </div>
                <div className="notification-block">
                    <div className="notification-header">
                        <div className="notification-header-title">
                            <div>Latest Notification</div>
                            {/* <div style={{"color": "rgb(136, 134, 134)"}}>(2)</div> */}
                        </div>
                        <img src={require('../assets/pngs/dustbin.png')} alt="delete" className='sidenav-img' onClick={handleDeleteTeamPopup}/>
                    </div>
                    <div className="notifications">
                        {/* {userData ? (
                          <NotificationItem
                            firstname={userData.firstname}
                            currentDate={userData.currentDate}
                            loginTime={userData.loginTime}
                            notificationId={userData.notificationId}
                          />
                        ) : (
                          <p></p>
                        )} */}
                         <NotificationItem firstname={""} currentDate={""} loginTime={""} notificationId={""}/>
                        {/*<NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/> */}
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
);
};

// function useEffect(arg0: () => void, arg1: never[]) {
//   throw new Error("Function not implemented.");
// }
