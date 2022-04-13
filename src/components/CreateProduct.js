import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Login from '../pages/Login'

export default function CreateProduct() {

	const [productName, setProductName] = useState('');
	const [description, setDescription] = useState('');
	const [sellingPrice, setSellingPrice] = useState('');
	const [stock, setStock] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	// console.log(Preview)

	useEffect(() => {
		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	},[productName, description, sellingPrice, stock])

	const createListing = async (submitEvent) => {		
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;		

		const isCreated = await fetch('http://localhost:8000/products/', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${userCredentials}`,
				'Content-Type' : 'application/json'
			},

			body: JSON.stringify({
				productName: productName,
				description: description,
				sellingPrice: sellingPrice,
				stock: stock,
				isActive: isActive
			})
		}).then(result => result.json()).then(itemData => {
			console.log(itemData)
			if (itemData) {
				return true;
			} else {
				return false;
			}

		})

		
	};	

	return(
		<>
		<Container>
		<Col className='p-5'>
			<Form onSubmit={e => createListing(e)} >
				<Form.Group>
					<Form.Label>Product Name</Form.Label>
					<Form.Control 
					type="text" 
					required 
					value={productName}
					onChange={event => setProductName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control 
					type="text" 
					required
					value={description}
					onChange={e => setDescription(e.target.value)} 
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control 
					type="number" 
					required
					value={sellingPrice}
					onChange={e => setSellingPrice(e.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Stock</Form.Label>
					<Form.Control 
					type="number" 
					required
					value={stock}
					onChange={e => setStock(e.target.value)} 
					/>
				</Form.Group>

				<div className="mb-4">
					<input type="checkbox" checked={false} value={isActive} onChange={e => e.target.value} /> Display product as Active
				</div>

				{
					isFilled ?
						<Button className="createBtn" type="submit">Create Product</Button>	
					:
						<Button className="createBtn" disabled>Create Product</Button>	
				}
					
				
			</Form>
		</Col>			
		</Container>
		</>
	)
}