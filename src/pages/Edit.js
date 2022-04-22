import {Button, Col, Row, Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

export default function Edit() {	

	let { id } = useParams();
	let [productName, setProductName] = useState('');
	let [description, setDescription] = useState('');
	let [sellingPrice, setSellingPrice] = useState('');
	let [stock, setStock] = useState('');
	let [isFilled, setIsFilled] = useState(false);
	let [isActive, setIsActive] = useState(false);
	const [data, setData] = useState([])
	let toggleChecked = () => setIsActive(value => !value)
	// console.log(productName)
	// Handle the id and extract it's information
	// Fill the form with information
	// Let the form editable
	// Form can save the update

	useEffect(async () => {

		let inventoryInfo = await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(convertedData => {
			setData(convertedData)
		})

		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	},[productName, description, sellingPrice, stock])



	const updateListing = async (processEvent) => {
		processEvent.preventDefault();
		let userCredentials = localStorage.accessToken;		
		const isUpdated = await fetch(`http://localhost:8000/products/${id}/update-product`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer${userCredentials}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				productName: productName,
				description: description,
				sellingPrice: sellingPrice,
				stock: stock,
				isActive: isActive
			})
		}).then(res => res.json()).then(updated => {
			console.log(updated)
		})

		console.log(data.productName)
		
		return (
			Swal.fire({
				icon: "success",
				text: "Product update was successful"
			})
		)	
	}

	return (
		<div>
			<Container>
				<Col>

				<Form onSubmit={e => updateListing(e)} className="p-5">
					<Form.Group>
						<Form.Label>Product Name</Form.Label>
						<Form.Control					
						type="text"
						required
						defaultValue={data.productName}
						
						

						 />
						
					</Form.Group>

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control 
						type="text" 
						required
						defaultValue={data.description}

						/>
					</Form.Group>

					<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control 
					type="number" 
					required
					defaultValue={data.sellingPrice}

					 />
					</Form.Group>	

					<Form.Group>
						<Form.Label>Stock</Form.Label>
						<Form.Control 
						type="number" 
						required
						defaultValue={data.stock}

						/>
					</Form.Group>

					<div className="mb-4">
						<input 
						type="checkbox" 
						/> Display product as Active
					</div>

					<Button className="createBtn" type="submit">Update Product Info</Button>

				{/*	{
						isFilled ?
							<Button className="createBtn" type="submit">Update Product Info</Button>
						:
							<Button className="createBtn" disabled>Update Product Info</Button>
					}
*/}
						
				</Form>
				</Col>
			</Container>
		</div>
	)
}


