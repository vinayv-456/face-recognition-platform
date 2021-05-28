import React from 'react';
import { withRouter } from 'react-router';

const Navigation = (props) => {
  return (
    <div>
    {
      props.match.path === "/home"
      ?
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div 
          onClick={()=>{
            props.handleSignOut(); 
            props.history.push("signin")
          }}>
          <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer'  }}>Sign Out</p>
        </div>
      </nav>
      :
      <div>
        {
          props.match.path === "/register"
          ?
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div onClick={()=>props.history.push("signin")}>
              <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer' }}>signIn</p>
            </div>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow', cursor:'pointer' }}>Regsiter</p>
          </nav>
          :
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow', cursor:'pointer'}} >SignIn</p>
            <div onClick={()=>props.history.push("register")}>
              <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer' }}>Regsiter</p>
            </div>
          </nav>
        }
      </div>
    }
    </div>
  );
}

export default withRouter(Navigation);