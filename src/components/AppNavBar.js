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

					</Nav>										
												
					</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>	

		{/*Cart icon will show if isAdmin === false and !== null*/}
			<Row className="navCart">
				<Col className="cartColumnSize">	
					{
						user.isAdmin !== null && user.isAdmin === false ?
							<a href ="/my-orders">
							<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-cart cartFont" viewBox="0 0 16 16">
							  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>		  
							</svg>
							</a>
						:
							<></>
					}				
					
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