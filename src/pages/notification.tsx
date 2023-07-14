import { toast } from "react-toastify";
import { Header } from '../components/header';


import { Sidenav } from '../components/sidenav';


const NotificationItem = ()=>{

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
      }

    return(
        <div className="notification-container">
            <div className="notification-check-box">
                <input type="checkbox" />
            </div>
            <div className="notification-details">
                <div className="notification-details-heading">Congrats! your project is published</div>
                <div className="notification-details-content">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>
                <div className="notification-details-timestamp">
                    <div className="notification-timestamp-date">04/07/2023</div>
                    <div className="notification-timestamp-date">02:00 PM</div>
                </div>
            </div>
            <div className="notification-delete">

                <img src={require('../assets/pngs/dustbin.png')} alt="delete" className='sidenav-img' onClick={deleteSingleNotification}/>
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
          className : 'delete-notification-toast'
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
                            <div style={{"color": "rgb(136, 134, 134)"}}>(2)</div>
                        </div>
                        <img src={require('../assets/pngs/dustbin.png')} alt="delete" className='sidenav-img' onClick={deleteAllNotification}/>
                    </div>
                    <div className="notifications">
                        <NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/>
                        <NotificationItem/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
);
};