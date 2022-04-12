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
	// console.log(Preview)

	useEffect(() => {
		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	},[productName, description, sellingPrice, stock])

	const createListing = async (submitEvent) => {		
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;
		// console.log(userCredentials)

		fetch('https://limitless-brushlands-90925.herokuapp.com/users/users', {
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(response => response.json()).then(userData => {
			let userAdmin = userData.isAdmin;
			console.log(userAdmin)

			if (userAdmin) {
				const isCreated = fetch('https://limitless-brushlands-90925.herokuapp.com/products/', {
					method: 'POST',
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify({
						productName: productName,
						description: description,
						sellingPrice: sellingPrice,
						stock: stock
					})
				}).then(res => res.json()).then(itemData => {
					console.log(itemData);
					
					if (itemData) {
						return true
					} else {
						return false
					}

					if (isCreated) {
						setProductName('');
						setDescription('');
						setSellingPrice('');
						setStock('');

						Swal.fire({
							icon: 'success',
							text: 'New Product Listing is Created'
						})
						// window.location.href = "/manage-product";
					} else {
						Swal.fire({
							icon: 'error',
							text: 'Make sure all fields are filled'
						})
					}					
				})
			} else {
				return false
			}
		})

		// const isCreated = await fetch('https://limitless-brushlands-90925.herokuapp.com/products/', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// 	// body: JSON.stringify({
		// 	// 	productName: productName,
		// 	// 	description: description,
		// 	// 	sellingPrice: sellingPrice,
		// 	// 	stock: stock
		// 	// })
		// }).then(outcome => outcome.json()).then(itemData => {
		// 	console.log(itemData);

		// 	if (itemData) {
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}
		// })

		// if (isCreated) {
		// 	// setProductName('');
		// 	// setDescription('');
		// 	// setSellingPrice('');
		// 	// setStock('');

		// 	await Swal.fire({
		// 		icon: 'success',
		// 		text: 'New Product Listing is Created'
		// 	})
			
		// 	// window.location.href = "/manage-product";
		// } else {
		// 	await Swal.fire({
		// 		icon: 'error',
		// 		text: 'Make sure all fields are filled'
		// 	})
		// }		
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
					<input type="checkbox" /> Display product as Active
				</div>

				{
					isActive ?
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