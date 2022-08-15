import { useContext } from 'react';
import { Navbar, Nav, Container, Dropdown, Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext'

function AppNavBar() {
	
	const { user } = useContext(UserContext);	

	// Function for logout
	const clear = () => {
		localStorage.clear();
		window.location.href="/login";
	};

	

	return(		
		<div id="navigationBar">
			<Container className="navContainer">
			<Row className="rowNavLogo">
				<Col>					
					<Navbar.Brand><a href="/"><img className="navLogoLg" src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1659935305/theme%20photos/Puppy_Paws__1_-removebg-preview_tvf4ay.png" alt="Puppy Paws logo" /></a></Navbar.Brand>	
				</Col>
			</Row>
				
			<Row className="navList">
				<Col>
					<Navbar expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav "/>
					<Navbar.Collapse className="basic-navbar-nav">	
					<Nav>
						<Nav.Link href="/" className="nav-link navOptions" >Home</Nav.Link>		
						<Nav.Link href="/catalog" className="nav-link navOptions">Catalog</Nav.Link>
						{
							user.id === null ?
								<Nav.Link href="/register" className="nav-link navOptions">Register</Nav.Link>
							:
								<></>

						}

						{
							user.isAdmin !== null && user.isAdmin === true ?
							<Nav.Link href="/manage-product" className="nav-link navOptions">Inventory</Nav.Link>
							:
							<></>
						}

						{
							user.isAdmin !== null && user.isAdmin === false ?
								<Nav.Link href="/my-orders" className="nav-link navOptions">Cart</Nav.Link>
								
							:
								<></>
						}	

					</Nav>										
												
					</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>	
		
			<Row className="navProfile">
				<Col>
					<Dropdown>
						<Dropdown.Toggle variant="none" className="dropdown-basic">
							<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person-fill personNav" viewBox="0 0 16 16">
							  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
							</svg>
						</Dropdown.Toggle>	

						<Dropdown.Menu>			
							{
								user.id !== null ?
								<>
									<Dropdown.Item href="/profile" >Profile</Dropdown.Item>
									<Dropdown.Item onClick={clear} >Logout</Dropdown.Item>
								</>
									
								:
									<Dropdown.Item href="/login" >Login</Dropdown.Item>
							}				
							
							
						</Dropdown.Menu>					
					</Dropdown>	
				</Col>
			</Row>					
		</Container>
		</div>
		
	);
};

export default AppNavBar;