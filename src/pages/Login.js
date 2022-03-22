import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext';
import { useState, useEffect, useContext } from 'react';
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
				<Form>
					{/*Email Address Field*/}
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control 
						type="email"
						placeholder="Enter Email Here"
						required
						/>
					</Form.Group>

					{/*Password Field*/}
					<Form.Group>
						<Form.Label>Password:</Form.Label>
						<Form.Control 
						type="password"
						placeholder="Enter Password Here"
						required
						/>
					</Form.Group>

					{/*Button*/}
					<Button
					className="btn-block loginBtn"
					type="submit"
					>Login</Button>
				</Form>
			</Card>	
		</Container>
		</>
	)
}