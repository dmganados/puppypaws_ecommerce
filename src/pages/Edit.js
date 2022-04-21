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
	let toggleChecked = () => setIsActive(value => !value)
	// console.log(collectionProp)
	// console.log(id)

	// console.warn("props", props)

	useEffect(() => {
		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	},[productName, description, sellingPrice, stock])

	const updateListing = async (processEvent) => {
		processEvent.preventDefault();
		let userCredentials = localStorage.accessToken;
		
		const isUpdated = await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(listingData => {
			console.log(listingData)
		})
		// console.log(isUpdated)
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

				<Form /*onSubmit={e => updateListing(e)}*/ className="p-5">
					<Form.Group>
						<Form.Label>Product Name</Form.Label>
						<Form.Control					
						type="text"
						required
						value={productName}
						onChange={e => setProductName(e.target.value)}
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
						<input 
						type="checkbox" 
						/> Display product as Active
					</div>

					{
						isFilled ?
							<Button className="createBtn" type="submit">Update Product Info</Button>
						:
							<Button className="createBtn" disabled>Update Product Info</Button>
					}

						
				</Form>
				</Col>
			</Container>
		</div>
	)
}


