import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';

export const BillingHistory = () => {
    return ( 
    <div className='home-container'>
        <section >
            <Header />
        <div className='content'>
            <Sidenav />
            <div className='credit-main'>
                <div className="credit-main-header">
                    <div className='credit-text'>
                        <div className='credit-dashboard'>
                          <a className='credit-back-button' href="/account">
                          <img src={require('../assets/pngs/back.png')} alt="back" />
                          </a>
                          <div>Billing History</div>
                        </div>
                        <div className="credit-download-button">Download</div>
                    </div>
                </div>
                <div className="credit-history-table">
                    <div className="credit-history-table-header">
                        <div className="credit-history-date">Date</div>
                        <div className="credit-history-subscription">Subscription Type</div>
                        <div className="credit-history-amount">Amount</div>
                    </div>

                    <div className="credit-history-table-entries">
                        <div className="credit-history-date">10/04/2023</div>
                        <div className="credit-history-subscription">Basic</div>
                        <div className="credit-history-amount">3000</div>
                    </div>

                    <div className="credit-history-table-entries">
                        <div className="credit-history-date">10/04/2023</div>
                        <div className="credit-history-subscription">Premium</div>
                        <div className="credit-history-amount">3000</div>
                    </div>
            
                    <div className="credit-history-table-entries">
                        <div className="credit-history-date">10/04/2023</div>
                        <div className="credit-history-subscription">Basic</div>
                        <div className="credit-history-amount">3000</div>
                    </div>

                    <div className="credit-history-table-entries">
                        <div className="credit-history-date">10/04/2023</div>
                        <div className="credit-history-subscription">Business</div>
                        <div className="credit-history-amount">3000</div>
                    </div>

                </div>
            </div>

            </div>
        </section>
    </div>
);
};