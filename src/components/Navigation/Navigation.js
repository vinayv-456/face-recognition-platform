import React from 'react';

const Navigation = ({route, handleRoute}) => {
  return (
    <div>
    {
      route === "home"
      ?
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div onClick={()=>handleRoute("signIn")}>
          <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer'  }}>Sign Out</p>
        </div>
      </nav>
      :
      <div>
        {
          route === "register"
          ?
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div onClick={()=>handleRoute("signIn")}>
              <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer' }}>signIn</p>
            </div>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow', cursor:'pointer' }}>Regsiter</p>
          </nav>
          :
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow', cursor:'pointer'}} >SignIn</p>
            <div onClick={()=>handleRoute("register")}>
              <p style={{textDecoration: 'underline', margin: '20px', cursor:'pointer' }}>Regsiter</p>
            </div>
          </nav>
        }
      </div>
    }
    </div>
  );
}

export default Navigation;