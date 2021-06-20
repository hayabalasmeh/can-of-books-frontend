import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Profile() {
  const { user,isAuthenticated } = useAuth0();
  
    
    
 
  return isAuthenticated && (
  <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={user.picture} alt=''/>
        <Card.Body>
          <Card.Title>Welcome To your Profile</Card.Title>
          <Card.Text>
          Hello {user.name}
          </Card.Text>
          <Card.Text>
        {user.email}
          </Card.Text>
          
        </Card.Body>
      </Card>
  </>
  )
}

export default Profile;