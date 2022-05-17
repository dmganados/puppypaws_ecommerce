import {Button, Col, Row, Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FilePond, registerPlugin} from 'react-filepond';

export default function Edit() {	

	let { id } = useParams();
	const [data, setData] = useState([])
	let price = data.sellingPrice
	let [productName, setProductName] = useState(data.productName);
	let [description, setDescription] = useState(data.description);
	let [sellingPrice, setSellingPrice] = useState('');
	let [stock, setStock] = useState(data.stock);
	let [productImg, setProductImg] = useState(data.productImg);
	let [isFilled, setIsFilled] = useState(false);
	let [isActive, setIsActive] = useState(false);	
	let toggleChecked = () => setIsActive(value => !value)	
	// console.log(typeof data.sellingPrice)
	// console.log(productName)

	useEffect(async () => {
		
		if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}		
	},[productName, description, sellingPrice, stock])

	// Extract the product information and set a new data
	const inventoryInfo = fetch(`http://localhost:8000/products/${id}`).then(res => res.json()).then(convertedData => {		
		setData(convertedData)
		// console.log(convertedData)
	})

	// Not yet pushed to heroku
	// Option to update image
	// Work on handling values from prefilled form and remain as the data on the same form
	const editHandler = (event) => {
		setProductName(event.target.files);
		setDescription(event.target.files);
		setSellingPrice(event.target.files);
		setStock(event.target.files);
		setProductImg(event.target.files[0])
	}

	const updateListing = async (processEvent) => {
		processEvent.preventDefault();
		let userCredentials = localStorage.accessToken;	
		let updateData = new FormData();
		updateData.append('productName', productName);
		updateData.append('description', description);
		updateData.append('sellingPrice', sellingPrice);
		updateData.append('stock', stock);
		updateData.append('isActive',isActive);
		updateData.append('productImg', productImg)
		
		const isUpdated = await fetch(`http://localhost:8000/products/${id}/update-product`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${userCredentials}`,
				// 'Content-Type': 'multipart/form-data'
			},			
			body: updateData
		}).then(res => res.json()).then(updated => {
			console.log(updated)
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
						onChange={(e) => setSellingPrice(data.sellingPrice)}
						
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

					<input 
					type="file" 
					defaultValue={data.productImg}
					onChange={e => setProductImg(e.target.files[0])} /> <br/><br/>

					<img style={{width:100, height: 100}} src={data.productImg} /> <br/> <br/>

					<Button onClick={e => updateListing(e)} className="createBtn">Update Product Info</Button>

					{/*{
						isFilled ?
							<Button onClick={(e) => updateListing(e)} className="createBtn">Update Product Info</Button>
						:
							<Button className="createBtn" disabled>Update Product Info</Button>
					}*/}

						
				</Form>
				</Col>
			</Container>
		</div>
	)
}


