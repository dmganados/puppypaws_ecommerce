import { useState, useEffect, useContent } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {

	return(
		<Container >
			<h3 className="text-center" >Create your Account</h3>			
			<Row>			
			<Card className="px-5 py-1" id="regCard">
				<Form className="p-1 mt-2">
					<Form.Group>
						<Form.Label>First Name:</Form.Label>
						<Form.Control
						type="text"
						placeholder="e.g: Juan"
						required
						 />
					</Form.Group>
				</Form>

				<Form className="p-1">
					<Form.Group>
						<Form.Label>Last Name:</Form.Label>
						<Form.Control
						type="text"
						placeholder="e.g: Dela Cruz"
						required
						 />
					</Form.Group>
				</Form>

				<Form className="p-1">
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control
						type="email"
						placeholder="e.g: juandelacruz@email.com"
						required
						 />
					</Form.Group>
				</Form>


				<Form className="p-1">
					<Form.Group>
						<Form.Label>Mobile Number:</Form.Label>
						<Form.Control
						type="number"
						placeholder="e.g: 09123456789"
						required
						 />
					</Form.Group>
				</Form>

				<Form className="p-1">
					<Form.Group>
						<Form.Label>Password:</Form.Label>
						<Form.Control
						type="password"
						placeholder="Enter password"
						required
						 />
						 <p>At least 8 characters in alpha numeric case</p>
					</Form.Group>
				</Form>

				<Form className="p-1">
					<Form.Group>
						<Form.Label>Confirm Password:</Form.Label>
						<Form.Control
						type="password"
						placeholder="Confirm your password"
						required
						 />						 
					</Form.Group>
				</Form>				
			</Card>				
				<Col className="p-2 ml-4 register">
				<Button className="d-block p-2 mb-2 regstrBtn1" type="submit">Register as a Buyer</Button>
				<Button className="p-2 mt-2 regstrBtn2" type="submit">Register as a Seller</Button>
				</Col>
			</Row>
		</Container>
	)
};