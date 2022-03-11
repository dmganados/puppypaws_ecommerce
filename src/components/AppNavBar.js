import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AppNavBar() {
	return(
		<Navbar id="navbar" expand="lg">
			<Container>
				<Navbar.Brand>E-commerce App</Navbar.Brand>
					{/*<form>
						<input type="search" placeholder="Search" aria-label="Search">
						<button classname="btn btn-outline-success my-2 my-sm-0">Search</button>
					</form>*/}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse>
						<Nav classname="ml-auto">
							<Nav.Link to="/" classname="nav-link">Home</Nav.Link>
							<Nav.Link>Catalog</Nav.Link>
							<Nav.Link>Register</Nav.Link>
							<Nav.Link classname="">Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavBar;