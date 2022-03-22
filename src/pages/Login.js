
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';


export default function Login() {

	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let addressSign = email.search('@');
	let dns = email.search('.com');
	const [isActive, setIsActive] = useState(false);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (dns !== -1 && addressSign !== -1) {
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

	const loginUser = async (event) => {
		fetch('https://limitless-brushlands-90925.herokuapp.com/users/user-token', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				email : email,
				password: password
			}).then(res => res.json()).then(tokenData => {
				let token = tokenData.accessToken;
				if (typeof token !== 'undefined') {
					localStorage.setItem('accessToken', token);

					fetch('https://limitless-brushlands-90925.herokuapp.com/users/users', {
						headers: {
							Authorization: `Bearer ${token}`
						}
					}).then(res => res.json()).then(convertedData => {
						if (typeof convertedData._id !== "undefined") {
							setUser({
								id: convertedData._id,
								isAdmin: convertedData.isAdmin
							});
							Swal.fire({
								icon: 'success',
								title: 'Login Successful',
								text: 'Welcome'
							})
						} else {
							setUser({
								id: null,
								isAdmin: null
							})
						}
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Check your Credentials',
						text: 'Credential Error'
					})
				}		
			})
		})
	};

	return (
		user.id ?
			<Navigate to="/catalog" replace={true} />
		:
		<>
		<Container >
			<h3 className="d-flex justify-content-center">Login to your Account</h3>

			<Card className="d-block mt-lg-5 p-4 loginCard">
				<Form onSubmit={e => loginUser(e)}>
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
								<h6 className="text-success">Email is Valid</h6>
							:
								<h6 className="text-mute">Email is Invalid</h6>
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
							className="btn-block"
							type="secondary"
							>Login</Button>
					}
					
				</Form>
			</Card>	
		</Container>
		</>
	)
}