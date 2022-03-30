import { useState, useEffect, useContext } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import 'react-phone-input-2/lib/style.css'

export default function Register() {

	const { user } = useContext(UserContext);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [isMatched, setIsMatched] = useState(false);
	const [isMobileValid, setIsMobileValid] = useState(false);
	const [isPassValid, setIsPassValid] = useState(false);

	useEffect(() => {

		if (mobileNo.length === 11) {
			setIsMobileValid(true);
			if (password1.length >= 8) {
				setIsPassValid(true);
				if (password1 === password2 && password1 !== '' && password2 !== '') {
					setIsMatched(true);
					if (firstName !== '' && lastName !== '' && email !== '') {
						setIsActive(true);
					} else {
						setIsActive(false);
					}
				} else {
					setIsActive(false);
					setIsMatched(false);
				}
			} else {
				setIsActive(false);
				setIsMatched(false);
				setIsPassValid(false);
			}
		} else if (password1 !=='' && password1 === password2) {
			setIsMatched(false);
		} else {
			setIsActive(false);
			setIsMatched(false);
			setIsPassValid(false);
			setIsMatched(false);
		}	
	},[mobileNo, password1, password2, firstName, lastName, email]);

	const registerUser = async (submit) => {
		submit.preventDefault()

		const isRegistered = await fetch('https://glacial-everglades-19835.herokuapp.com/users/register', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password1,
				mobileNo: mobileNo
			})
		}).then(result => result.json()).then(resultData => {
			// console.log(resultData);
			if (resultData.email) {
				return true;
			} else {
				return false;
			}
		})

		if (isRegistered) {
			await Swal.fire({
				icon: 'success',
				title: 'Registration Successful',
				text: 'Thank you for creating an account'
			})

			setFirstName('');
			setLastName('');
			setEmail('');
			setMobileNo('');
			setPassword1('');
			setPassword2('');

			
			window.location.href = "/login";

		} else {
			await Swal.fire({
				icon: 'error',
				title: 'Something Went Wrong',
				text: 'Try Again Later'
			});
		}		
	};

	return(

		user.id ?
			<Navigate to="/" replace={true} />
		:		
		<>
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
						<Form.Label>Phone:</Form.Label>
						<PhoneInput
						className="phone"
						country={'ph'}				
						required
						value={mobileNo}
						onChange={setMobileNo}
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
						{
							isPassValid ?
								<span className="text-success">Password is valid</span>
							:
								<span>At least 8 characters in alpha numeric case</span>
						}	
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
						 {
						 	isMatched ?
						 		<span className="text-success">Passwords Matched!</span>
						 	:
						 		<span>Passwords should match!</span>
						 }						 
					</Form.Group>
			</Card>

				{/*Button*/}	
				{
					isActive ?
						<Col className="p-2 ml-4 register">
						<Button className="d-block p-2 mb-2 regstrBtn1" type="submit">Register as a Buyer</Button>
						<Button className="p-2 mt-2 regstrBtn2" type="submit">Register as a Seller</Button>
						</Col>
					:

						<Col className="p-2 ml-4 register">
						<Button className="d-block p-2 mb-2 regstrBtn1" disabled>Register as a Buyer</Button>
						<Button className="p-2 mt-2 regstrBtn2" disabled>Register as a Seller</Button>
						</Col>
				}
				
			</Row>
			</Form>	
		</Container>
		</>
	)
};