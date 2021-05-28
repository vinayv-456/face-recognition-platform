import { Button } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';

const Navigation = (props) => {
  return (
    <div>
    {
      props.match.path === "/home"
      ?
      <nav style={{display: 'flex', justifyContent: 'flex-end', marginRight:'15px'}}>
        <Button 
          color="primary"
          style={{textDecoration: 'underline', color:'black' }}
          onClick={()=>{
            props.history.push("signin");
            props.handleSignOut();
            }
          }
        >signout</Button>
      </nav>
      :
      <div>
        {
          <nav style={{display: 'flex', justifyContent: 'flex-end', marginRight:'15px'}}>
            <Button 
              color="primary"
              style={props.match.path === "/register" ? 
                {textDecoration: 'underline', color: 'black' } :
                {textDecoration: 'underline', color:'yellow' }
              } 
              onClick={()=>props.history.push("signin")}
            >
              signin
            </Button>
            <Button 
              color="primary"
              style={props.match.path === "/register" ? 
              {textDecoration: 'underline', color:'yellow' } :
              {textDecoration: 'underline', color: 'black'} 
              }
              onClick={()=>props.history.push("register")}
            >
              Register
            </Button>
          </nav>
        }
      </div>
    }
    </div>
  );
}

export default withRouter(Navigation);