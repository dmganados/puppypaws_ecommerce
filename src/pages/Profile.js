import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Profile() {

	const [profile, setProfile] = useState([]);
	let userCredentials = localStorage.accessToken;	
	let firstName = profile.firstName;
	let lastName = profile.lastName;
	let phone = profile.phone;
	let email = profile.email

	// console.log(profile.firstName)

	useEffect(() => {
		getProfile();
	});

	const getProfile = async () => {
		await fetch('http://localhost:8000/users/users', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(user => {
			// console.log(user)
			setProfile(user)
		})
	}

	// Fix the styling
	
	return(
		<>
			<Container className="mt-5">
				<Row>
					<Col>
						<h5>Name:</h5>
						<span>{firstName} {lastName}</span>
						<h5>Phone:</h5>
						<span >{phone}</span>
						<h5>Email:</h5>
						<span>{email}</span>
					</Col>				
				</Row>
			</Container>
		</>
	)
}