import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Swal from 'sweetalert2';


export default function CreateProduct() {

	const newProduct = (submit) => {

		return(
			Swal.fire({
				icon: 'success',
				title: 'New Product is Created'
			})
		)
	}

	return(
		<>
		<Container>
		<Col className='p-5'>
			<Form onSubmit={e => newProduct(e)}>
				<Form.Group>
					<Form.Label>Product Name</Form.Label>
					<Form.Control type="text" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control type="text" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Stock</Form.Label>
					<Form.Control type="number" required />
				</Form.Group>

				<div className="mb-4">
					<input type="checkbox" /> Display product as Active
				</div>

				<Button className="createBtn">Create Product</Button>
			</Form>
		</Col>			
		</Container>
		</>
	)
}