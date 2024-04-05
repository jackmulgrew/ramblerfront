import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


function BasicExample() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()

    }

  return (
    <Navbar expand="lg" bg="mycolor" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><h1>Rambler</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            
            <Nav.Link href="/"><span class="material-symbols-outlined one">home</span></Nav.Link>
        
            <Navbar.Text>
            {user && (
              
                        <div>
                        <span >{user.email}</span>
                        <button onClick={handleClick}>Log Out </button>
                    </div>
                    )}
                    {!user && (
                        <div>
                            
                        </div>
                    )}
                    </Navbar.Text>
                   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;