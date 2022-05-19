import {Button, Col, Row, Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FilePond, registerPlugin} from 'react-filepond';
import Upload from '../components/Uploads'

export default function Edit() {	

	const {id} = useParams();
	let [productName, setProductName] = useState('');
	let [description, setDescription] = useState('');
	let [sellingPrice, setSellingPrice] = useState('');
	let [stock, setStock] = useState('');	
	let [productImg, setProductImg] = useState('');	
	let [isActive, setIsActive] = useState(false);	
	let [newFile, setNewFile] = useState('')
	let toggleChecked = () => setIsActive(value => !value)
	// console.log(productImg)

	useEffect(() => {
		productInfo();	
		// newImage();	
	},[])

	const productInfo = async () => {
		await fetch(`http://localhost:8000/products/${id}`).then(res => res.json()).then(data => {
			// console.log(data)
			setProductName(data.productName);
			setDescription(data.description);
			setSellingPrice(data.sellingPrice);
			setStock(data.stock);
			setIsActive(data.isActive);	
		})
	};

	// const newImage = async () => {
	// 	let addFile = new FormData();
	// 	addFile.append('productImg', productImg)
	// 	await fetch('http://localhost:8000/products/upload',{
	// 		method: 'POST',
	// 		body: addFile
	// 	}).then(result => result.json()).then(file => {
	// 		console.log(file)
	// 	})
	// }

	const productUpdate = async () => {
		// console.log(productName, description, sellingPrice, stock)
		let formData = new FormData()
		let addFile = new FormData();
		addFile.append('productImg', productImg)
		formData.append('productName', productName);
		formData.append('description', description);
		formData.append('sellingPrice', sellingPrice);
		formData.append('stock', stock);
		formData.append('isActive', isActive);
		// formData.append('productImg', productImg);

		let newImage = (event) => {
			if (productImg !== '') {
				 fetch('http://localhost:8000/products/upload',{
					method: 'POST',
					body: addFile
				}).then(result => result.json()).then(file => {
					setProductImg(file)
				})
			}			
		}
		
		// Work on changing the product image by the new uploaded image
		// Work on Delete Component
		// Work on viewing individual product
		// Work on Displaying Images on the Catalog

		let isUpdated = await fetch(`http://localhost:8000/products/${id}/update-product`, {
			method: 'PUT',			
			body: formData
		}).then(res => res.json()).then(newData => {
			console.log(newData)
		})
	};
	

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
						onChange={(e) => {setDescription(e.target.value)}}
								
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control 
						type="number" 
						required
						value={sellingPrice}
						onChange={(e) => {setSellingPrice(e.target.value)}}
							
					 	/>
					</Form.Group>	

					<Form.Group>
						<Form.Label>Stock</Form.Label>
						<Form.Control 
						type="number" 
						required
						value={stock}
						onChange={(e) => {setStock(e.target.value)}}
											
						/>
					</Form.Group>

					<div className="mb-4">
						<input 
						type="checkbox"
						checked={isActive}
						onChange={toggleChecked}				
						/> Display product as Active
					</div>
					
					<input 
					type="file"					 
					onChange={e => setProductImg(e.target.files[0])}
					 /> <br/><br/>
					 
					<Button onClick={e => productUpdate(e)} className="createBtn">Update Product Info</Button>

				
						
				</Form>
				</Col>
			</Container>	
			
		</div>
	)
}


