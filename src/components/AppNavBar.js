import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AppNavBar() {
	return(
		<Navbar id="navbar" expand="lg">
			<Container>
				<Navbar.Brand>E-commerce App</Navbar.Brand>	
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse>						
						<Nav className="ml-auto navLists">							
							<Nav.Link to="/" className="nav-link">Home</Nav.Link>
							<Nav.Link>Catalog</Nav.Link>
							<Nav.Link>Register</Nav.Link>
							<Nav.Link >Login</Nav.Link>							
						</Nav>						
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavBar;