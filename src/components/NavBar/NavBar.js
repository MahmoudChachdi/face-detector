import React from 'react';

import LOGO from './LOGO.png';
import Tilt from 'react-tilt';
import './NavBar.css';

const NavBar = ({onRouteChange, isSignedin}) => {
  if (isSignedin) {
  return(
<nav class=" white dt w-100 border-box  ph5-ns">
  <div style={{paddingTop: '0px'}} className='ma2 mt2 ph3 '>
            <Tilt className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1"> 
                <img
                              src={LOGO}
                              
                              
                              alt='logo'/> 
              </div>
            </Tilt>
          
        </div>
  <div class="dtc v-mid w-75 tr">
    
    
<p  onClick={()=>onRouteChange('signout')} className="pointer link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Signout</p>
</div>
</nav>);}
  else { 
    return(
    <nav class="white dt w-100 border-box  ph5-ns">
  <div style={{paddingTop: '0px'}} className='ma2 mt2 ph3 '>
            <Tilt className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1"> 
                <img
                              src={LOGO}
                              
                              
                              alt='logo'/> 
              </div>
            </Tilt>
          
        </div>
  <div class="dtc v-mid w-75 tr ">
    
    <p  onClick={()=>onRouteChange('signin')}   className="pointer link dim dark-gray f4 f4-ns dib mr3 mr4-ns" href="#" title="Store">Signin</p>
    <p  onClick={()=>onRouteChange('register')} className="pointer link dim dark-gray f4 f4-ns dib mr3 mr4-ns" href="#" title="Contact">Register</p>
  </div>
</nav>); } 
  
}
export default NavBar;



