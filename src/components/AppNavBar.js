import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function AppNavBar() {
	return(
		<Navbar id="nav-background" bg="primary" expand="lg">
			<Container>
				<Navbar.Brand>E-commerce App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse>
						<Nav classname="ml-auto">
							<Link to="/" classname="nav-link">Home</Link>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AppNavBar;