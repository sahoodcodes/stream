import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logoNetflix from '../../Store/logoNetflix.png';

function NavBar() {
  let navigate = useNavigate();
  const auth = getAuth();
  const Signout = (e) => {
    console.log('signout');
    signOut(auth)
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        alert(error.message);
        alert('Something Went Wrong');
      });
  };
  const home = () => {
    navigate('/home');
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <a class="navbar-brand">
            <img className="logo" onClick={home} src={logoNetflix} alt="logo" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link className="tag nav-link" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tag nav-link" to="/tvshows">
                  TV Shows
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tag nav-link" to="/upcoming">
                  Upcoming
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="tag nav-link" to="/mylist">
                  My List
                </Link>
              </Nav.Link>
              {/* <Nav.Link onClick={Signout} ><Link className='tag nav-link fw-bold ml-auto' to="/">Sign Out</Link></Nav.Link> */}
              <Navbar.Text onClick={Signout} className="fw-bold">
                <Link className="tag nav-link" to="/">
                  {' '}
                  Sign Out
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default NavBar;
