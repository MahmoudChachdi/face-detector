import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LOGO from './LOGO.png';
import Tilt from 'react-tilt';
import './NavBar.css';

const NavBar = ({onRouteChange, isSignedin}) => {
  if (isSignedin) {
  return(
  <nav className = 'white  w-100  shadow-2 ph3  dt dt--fixed w-100 border-box  ph5-ns ' style={{display: 'flex'}} >  
      
        <div style={{paddingTop: '0px'}} className='ma2 mt2 ph3 '>
            <Tilt className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1"> 
                <img
                              src={LOGO}
                              
                              
                              alt='logo'/> 
              </div>
            </Tilt>
          
        </div>
       
        <div style={{display: 'flex',  justifyContent: 'flex-end'}}  className='ma3 w-50 w-100-ns w-75-ns  ' >       
          <div >  
            <Navbar >
              <Container>
                <Navbar.Brand onClick={()=>onRouteChange('signout')} className=' left-100 f3 link br-pill b--black dim black  pa3 pointer'  >
                Signout
                </Navbar.Brand>
              </Container>
            </Navbar>
          </div>
        </div>
     
  </nav>);}
  else { 
    return(
    <nav className = 'white  w-100  shadow-2 ph3 dt dt--fixed w-100 border-box  ph5-ns ' style={{display: 'flex'}} >  
      
        <div style={{paddingTop: '0px'}} className='ma2 mt2 ph3 '>
            <Tilt className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1"> 
                <img
                              src={LOGO}
                              
                              
                              alt='logo'/> 
              </div>
            </Tilt>
          
        </div>
        <br/>
        <div/>
          <div style={{display: 'flex',  justifyContent: 'flex-end'}}  className='ma3  w-50 w-100-ns w-75-ns '  >
            <div >
              <Navbar >
                <Container>
                  <Navbar.Brand onClick={()=>onRouteChange('signin')}  className='left-100 f3 link br-pill b--black dim black  pa3 pointer'>Signin</Navbar.Brand>
                </Container>
              </Navbar>
            </div>
              <br/>
            <div >    
              <Navbar >
                <Container>
                  <Navbar.Brand  onClick={()=>onRouteChange('register')} className=' left-100 f3 link dim black br-pill b--black pa3 pointer'>Register</Navbar.Brand>
                </Container>
              </Navbar>
            </div>
            <br/>
          </div>
      
      
  </nav>); } 
  
}
export default NavBar;