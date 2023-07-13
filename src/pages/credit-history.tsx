import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';

export const CreditHistory = () => {
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
                            
                            <div>Credit History</div>
                          </div>
                          <div className="credit-download-button">Download</div>
                      </div>
                  </div>
                  <div className="credit-history-table">
                      <div className="credit-history-table-header">
                          <div className="credit-history-date">Date</div>
                          <div className="credit-history-subscription">Quantity</div>
                          <div className="credit-history-amount">Amount</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">1000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">500</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
              
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">1000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                      <div className="credit-history-table-entries">
                          <div className="credit-history-date">10/04/2023</div>
                          <div className="credit-history-subscription">30000</div>
                          <div className="credit-history-amount">3000</div>
                      </div>
  
                  </div>
              </div>  
              </div>
          </section>
      </div>
  );
};