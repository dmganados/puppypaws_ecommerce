import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext'



function AppNavBar() {
	
	const { user } = useContext(UserContext);

	return(
		<Navbar id="navigationBar" expand="lg">
			<Container>
				<Navbar.Brand>E-commerce App</Navbar.Brand>	
					<Navbar.Toggle aria-controls="basic-navbar-nav"  />
					<Navbar.Collapse id="basic-navbar-nav">						
						<Nav className="ml-auto d-block navLists">					
							<Nav.Link href="/" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Home</Nav.Link>
							
							<Nav.Link href="/catalog"className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Catalog</Nav.Link>

												
							{
								user.id !== null ?
									<Nav.Link href="/"className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Manage Product</Nav.Link>
								:
								<>
								<Nav.Link href="/register" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Register</Nav.Link>
								<Nav.Link href="/login" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Login</Nav.Link>	
								</>	
							}						
								
						</Nav>						
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavBar;