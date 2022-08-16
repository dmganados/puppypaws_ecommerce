import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
		await fetch('https://limitless-brushlands-90925.herokuapp.com/users/users', {
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
			<div>
				<Helmet>
					<title>Puppy Paws | Profile</title>
				</Helmet>
			</div>
			<Container className="mt-5">
				<Row>
					<Col>
						<h5 className="name">Name:</h5>
						<span className="nameData">{firstName} {lastName}</span>						
					</Col>				
				</Row>
				<Row>
					<Col>
						<h5 className="phone">Phone:</h5>
						<span className="phonData">{phone}</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="email">Email:</h5>
						<span className="emailData">{email}</span>
					</Col>
				</Row>
			</Container>
		</>
	)
}