import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './pages/components/Account';
import PlayPage from './pages/PlayPage';
import About from './pages/About';
import PlayerGuide from './pages/PlayerGuide';
import DataPage from './pages/DataPage';
//import logo from './styles/assets/logo.svg';
import './styles/scss/App.css';
import './styles/scss/header.scss';
import './styles/scss/shared.scss';
import './styles/scss/spacing.scss';
import './styles/scss/share.scss';


const App =() => (
    <Router>
      <div>
        <div className='position-relative'>
          <nav className="navbar navbar-expand-lg artx-header py-3 position-fixed w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
              <i className="fas fa-bars artx-type-tw text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className='navbar-nav mr-auto'>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-tw' href='/artx00/'>Game</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-tw' href='/artx00/about'>ARTX</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-tw' href='https://t.me/joinchat/HimWUVCuDboToxV2Q-kOYQ'>Community</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-tw' href='/artx00/auction-guide'>Player Guide</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-tw' href='/artx00/data-viz'>Decentral Art</a></li>
              </ul>
            </div>
            <Account/>
          </nav>
        </div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={PlayPage} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/auction-guide'} component={PlayerGuide} />
        <Route path={process.env.PUBLIC_URL + '/data-viz'} component={DataPage} />
      </div>
    </Router>
);

export default App;
