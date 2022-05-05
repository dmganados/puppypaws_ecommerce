import {Button, Col, Row, Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

export default function Edit() {	

	let { id } = useParams();
	const [data, setData] = useState([])
	let [productName, setProductName] = useState(data.productName);
	let [description, setDescription] = useState(data.description);
	let [sellingPrice, setSellingPrice] = useState(data.sellingPrice);
	let [stock, setStock] = useState(data.stock);
	let [isFilled, setIsFilled] = useState(false);
	let [isActive, setIsActive] = useState(false);	
	let toggleChecked = () => setIsActive(value => !value)
	// console.log(data.productImg)
	let productImage = data.productImg;
	let image = "http://localhost:8000/" + productImage;
	// console.log(data)

	useEffect(async () => {
		
		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}		
	},[productName, description, sellingPrice, stock])

	let inventoryInfo = fetch(`http://localhost:8000/products/${id}`).then(res => res.json()).then(convertedData => {		
		setData(convertedData)
	})

	const updateListing = async (processEvent) => {
		processEvent.preventDefault();
		let userCredentials = localStorage.accessToken;		
		const isUpdated = await fetch(`http://localhost:8000/products/${id}/update-product`, {
			method: 'PUT',
			headers: {				
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
			if (updated) {
				return true;
			} else {
				return false;
			}
		})

		if (isUpdated) {
			setProductName('');
			setDescription('');
			setSellingPrice('');
			setStock('');
			setIsActive(false);

			await Swal.fire({
				icon: "success",
				text: "Product update was successful"
			})

			window.location.href="/manage-product"
		} else {
			await Swal.fire({
				icon: "error",
				text: "Check all fiels"
			})
		}		
	}

	return (
		<div>
			<Container>
				<Col>

				<Form className="p-5">
					<Form.Group>
						<Form.Label>Product Name</Form.Label>
						<Form.Control					
						type="text"
						required
						defaultValue={data.productName}			
						onChange={(e) => setProductName(e.target.value)}

						 />
						
					</Form.Group>

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control 
						type="text" 
						required
						defaultValue={data.description}
						onChange={(e) => setDescription(e.target.value)}
						
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control 
						type="number" 
						required
						defaultValue={data.sellingPrice}
						onChange={(e) => setSellingPrice(e.target.value)}
						
					 	/>
					</Form.Group>	

					<Form.Group>
						<Form.Label>Stock</Form.Label>
						<Form.Control 
						type="number" 
						required
						defaultValue={data.stock}
						onChange={(e) => setStock(e.target.value)}
						
						/>
					</Form.Group>

					<div className="mb-4">
						<input 
						type="checkbox"
						name="controlled" 
						checked={isActive}							
						onChange={toggleChecked}
						/> Display product as Active
					</div>

					{/*<img src={image} />*/}

					{
						isFilled ?
							<Button onClick={(e) => updateListing(e)} className="createBtn">Update Product Info</Button>
						:
							<Button className="createBtn" disabled>Update Product Info</Button>
					}

						
				</Form>
				</Col>
			</Container>
		</div>
	)
}


