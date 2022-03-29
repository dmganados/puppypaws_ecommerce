import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Navigate } from 'react-router-dom';



export default function Login() {

	const { user, setUser } = useContext(UserContext);
	// console.log(user);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let addressSign = email.search('@')
	let dns = email.search('.com')
	const [isActive, setIsActive] = useState(false);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (dns !== -1 && addressSign !== -1 ) {
			setIsValid(true);
			if (password !== '') {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		} else {
			setIsValid(false);
			setIsActive(false);
		}
	},[email, password, addressSign, dns])	

	const userToken = async (eventSubmit) => {
		eventSubmit.preventDefault();
		// console.log(eventSubmit)
	
		fetch('https://limitless-brushlands-90925.herokuapp.com/users/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(res => res.json()).then(dataNaJson => {
			let token = dataNaJson.accessToken;
			console.log(token);

			if (typeof token !== 'undefined') {
				Swal.fire({
				 	icon: 'success',
				 	title: 'Login Successful',
				 	text: 'Welcome'
				 })	
			} else {
				Swal.fire({
				 	icon: "error",
				 	title: "Check your Credentials",
				 	text: "Email doesn't correspond to an account"			
				 })
			}
		})		
	
	};		

	return (
		user.id ?
			<Navigate to="/" replace={true} />
		:
		<>
		<Container >
			<h3 className="d-flex justify-content-center">Login to your Account</h3>
			<Form onSubmit={e => userToken(e)} >
				<Card className="d-block mt-lg-5 p-4 loginCard">
					{/*Email Address Field*/}
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control 
						type="email"
						placeholder="Enter Email Here"
						required
						value={email}
						onChange={event => {setEmail(event.target.value)}}
						/>
						{
							isValid ?
								<h6 className="text-success">&#10003; Email verified</h6>
							:
								<h6 className="text-mute">Enter a valid email</h6>
						}						
					</Form.Group>

					{/*Password Field*/}

					
					<Form.Group>
						<Form.Label>Password:</Form.Label>
						<Form.Control 
						type="password"
						placeholder="Enter Password Here"
						required	
						value={password}
						onChange={e => {setPassword(e.target.value)}}
						/>
					</Form.Group>

					{/*Button*/}

					{
						isActive ?
							<Button
							className="btn-block loginBtn"
							type="submit"
							>Login</Button>
						:
							<Button
							className="btn-block loginBtn"					
							disabled
							>Login</Button>	
					}						
				
				</Card>	
			</Form>
		</Container>
		</>
	);
};