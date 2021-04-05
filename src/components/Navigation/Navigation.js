import React from 'react';

const Navigation = ({route, handleRoute}) => {
  return (
    <div>
    {
      route === "home"
      ?
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p style={{textDecoration: 'underline', margin: '20px' }}>Sign Out</p>
      </nav>
      :
      <div>
        {
          route === "register"
          ?
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p style={{textDecoration: 'underline', margin: '20px' }}>signIn</p>
            <div onClick={handleRoute("register")}>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow' }}>Regsiter</p>
            </div>
          </nav>
          :
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p style={{textDecoration: 'underline', margin: '20px', color:'yellow'}} >SignIn</p>
            <p style={{textDecoration: 'underline', margin: '20px' }}>Regsiter</p>
          </nav>
        }
      </div>
    }
    </div>
  );
}

export default Navigation;