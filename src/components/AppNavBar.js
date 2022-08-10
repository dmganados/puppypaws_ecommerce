import { useContext } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import UserContext from '../UserContext'



function AppNavBar() {
	
	const { user } = useContext(UserContext);
	// console.log(user.isAdmin)
	let isAdmin = user.isAdmin
	let userCredentials = localStorage.accessToken;	

	return(
		<Navbar id="navigationBar" expand="lg">
			<Container>
				<Navbar.Brand><a href="/"><img className="navLogo" src="https://res.cloudinary.com/dc7ygfgw5/image/upload/c_thumb,w_200,g_face/v1659935305/theme%20photos/Puppy_Paws__1_-removebg-preview_tvf4ay.png" alt="Puppy Paws logo" /></a></Navbar.Brand>	
				<Navbar.Brand><a href="/"><img className="navLogoLg" src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1659935305/theme%20photos/Puppy_Paws__1_-removebg-preview_tvf4ay.png" alt="Puppy Paws logo" /></a></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav "/>
					<Navbar.Collapse id="basic-navbar-nav ">						
						<Nav className="d-inline navList">	
							<Nav.Link href="/" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Home</Nav.Link>		
							<Nav.Link href="/catalog" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Catalog</Nav.Link>							
							<Nav.Link href="/manage-product" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Manage Product</Nav.Link>							
							<Nav.Link href="/register" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Register</Nav.Link>
							<div className="icons">						
							<Dropdown className="userDrop">
								<Dropdown.Toggle variant="none" className="dropdown-basic userDropdown">
									<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person-fill d-inline personNav" viewBox="0 0 16 16">
									  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									</svg>
								</Dropdown.Toggle>	

								<Dropdown.Menu>
									<Dropdown.Item href="/login" >Login</Dropdown.Item>
									<Dropdown.Item href="/profile" >Profile</Dropdown.Item>
								</Dropdown.Menu>					
							</Dropdown>
								<a href ="/my-orders">
								<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-cart cartFont" viewBox="0 0 16 16">
								  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>							  
								</svg>
								</a>							
							</div>


												
							{/*{
								user.id !== null ?
									<Nav.Link href="/"className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Manage Product</Nav.Link>
								:
								<>
								<Nav.Link href="/register" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Register</Nav.Link>
								<Nav.Link href="/login" className="nav-link d-block d-sm-inline d-md-block d-lg-inline navOptions">Login</Nav.Link>	
								</>	
							}	*/}					
								
						</Nav>						
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavBar;


// Set what tab is shown in the navbar when a user logs in
// Change the images
// Finish the theme