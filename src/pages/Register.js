import { useState, useEffect, useContent } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [isMatched, setIsMatched] = useState(false);

	useEffect(() => {
		if (
			(firstName !== '' && lastName !== '' && email !== '' && mobileNo !=='' && password1 !== '' && password2 !== '') && (password1 === password2) && (mobileNo.length === 11)
			) 
		{
			console.log('You are allowed to create an account')
			setIsActive(true);
			setIsMatched(true);
		} else {
			console.log('Not allowed to create an account')
			setIsActive(false);
			setIsMatched(false);
		};
	});


	const registerUser = (submit) => {
		submit.preventDefault()

		

		return (
			Swal.fire({
				icon: 'success',
				title: 'Registration Successful',
				text: 'Thank you for creating an account'
			})
		);
	};

	return(
		<Container >
			<h3 className="text-center" >Create your Account</h3>
			<Form className="p-1 mt-2" onSubmit={e => registerUser(e)}>		
			<Row >			
			<Card className="px-5 py-4" id="regCard">
				
					{/*First Name Field*/}
					<Form.Group>
						<Form.Label>First Name:</Form.Label>
						<Form.Control
						type="text"
						placeholder="e.g: Juan"
						required
						value={firstName}
						onChange={event => setFirstName(event.target.value)}

						 />						
					</Form.Group>
					
					{/*Last Name Field*/}
					<Form.Group>
						<Form.Label>Last Name:</Form.Label>
						<Form.Control
						type="text"
						placeholder="e.g: Dela Cruz"
						required
						value={lastName}
						onChange={e => setLastName(e.target.value)}

						 />
					</Form.Group>			

					{/*Email address Field*/}
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control
						type="email"
						placeholder="e.g: juandelacruz@email.com"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}

						 />
					</Form.Group>
					
					{/*Mobile Number Field*/}
					<Form.Group>
						<Form.Label>Mobile Number:</Form.Label>
						<Form.Control
						type="number"
						placeholder="e.g: 09123456789"
						required
						value={mobileNo}
						onChange={e => setMobileNo(e.target.value)}

						 />
					</Form.Group>				
					
					{/*Password Field*/}
					<Form.Group>
						<Form.Label>Password:</Form.Label>
						<Form.Control
						type="password"
						placeholder="Enter password"
						required
						value={password1}
						onChange={e => setPassword1(e.target.value)}

						 />
						 <p>At least 8 characters in alpha numeric case</p>
					</Form.Group>
				
					{/*Confirm Password Field*/}				
					<Form.Group>
						<Form.Label>Confirm Password:</Form.Label>
						<Form.Control
						type="password"
						placeholder="Confirm your password"
						required
						value={password2}
						onChange={e => setPassword2(e.target.value)}

						 />						 
					</Form.Group>				
			</Card>
				{/*Button*/}	
				<Col className="p-2 ml-4 register">
				<Button className="d-block p-2 mb-2 regstrBtn1" type="submit">Register as a Buyer</Button>
				<Button className="p-2 mt-2 regstrBtn2" type="submit">Register as a Seller</Button>
				</Col>
			</Row>
			</Form>	
		</Container>
	)
};