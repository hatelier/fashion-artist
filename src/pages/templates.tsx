import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';
import Card from '../components/Card';
import { useState } from "react";


export const Templates = () => {
  const [display, setDisplay] = useState<'none' | 'flex'>('none');

const toggleDisplay = () => {
  setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
};
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
                  <span>Templates</span>
               </div>
             </div>
           </div>
           </div>
           <div className="subscription">
            <div className="templates-input-group">
              <input type="text" className="templates-input" placeholder="Search Templates" />
              <div className="templates-filter-block">
                  <div className="templates-filter" onClick={toggleDisplay}><img className='sidenav-img' src={require('../assets/pngs/filter-icon.png')} alt="" /><span>Filter</span><img className='sidenav-img' src={require('../assets/pngs/Dropdown.png')} alt="" /></div>
                  <div className="templates-filter-dropdown" style={{ display }}>
                    <div className="filter-dropdown-item">All</div>
                    <div className="filter-dropdown-item">Gown</div>
                    <div className="filter-dropdown-item">Tshirts</div>
                    <div className="filter-dropdown-item">Hoodie</div>
                    <div className="filter-dropdown-item">Trouser</div>
                    <div className="filter-dropdown-item">Sportwear</div>
                    <div className="filter-dropdown-item">Leggings</div>
                    <div className="filter-dropdown-item">Glasses</div>
                    <div className="filter-dropdown-item">Footwear</div>
                    <div className="filter-dropdown-item">Makeups</div>
                  </div>
                  </div>
            </div>
             <div className="templates-block">
             <Card>
               <div className="card-img-container">
                <div className="card-img-box">
                <img className='templates-love' src={require('../assets/pngs/love-icon.png')} alt="" />
                <img className="card-img" src="dummy" alt="Preview" />
                </div>
               </div>
               <div className="card-name">dummy</div>
               </Card>
          <Card>
               <div className="card-img-container">
                <div className="card-img-box">
                  <img className='templates-love' src={require('../assets/pngs/love-icon.png')} alt="" />
                <img className="card-img" src="dummy" alt="Preview" />
                </div>
               </div>
               <div className="card-name">dummy</div>
               </Card>
               <Card>
               <div className="card-img-container">
                <div className="card-img-box">
                <img className='templates-love' src={require('../assets/pngs/love-icon.png')} alt="" />
                <img className="card-img" src="dummy" alt="Preview" />
                </div>
               </div>
               <div className="card-name">dummy</div>
               </Card>
               <Card>
               <div className="card-img-container">
                <div className="card-img-box">
                <img className='templates-love' src={require('../assets/pngs/love-icon.png')} alt="" />
                <img className="card-img" src="dummy" alt="Preview" />
                </div>
               </div>
               <div className="card-name">dummy</div>
               </Card>
               
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};