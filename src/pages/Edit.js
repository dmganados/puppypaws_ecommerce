import {Button, Col, Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Edit() {
		
	const {id} = useParams();
	let [productName, setProductName] = useState('');	
	let [description, setDescription] = useState('');
	let [sellingPrice, setSellingPrice] = useState('');
	let [stock, setStock] = useState('');	
	let [productImg, setProductImg] = useState('');	
	let [isActive, setIsActive] = useState(false);		
	let toggleChecked = () => setIsActive(value => !value)				

	useEffect(() => {
		productInfo();			
	},[])	

	// Get the product details
	const productInfo = async () => {
		await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(data => {			
			setProductName(data.productName);
			setDescription(data.description);
			setSellingPrice(data.sellingPrice);
			setStock(data.stock);
			setIsActive(data.isActive);				
		})
	};

	const productUpdate = async (submitEvent) => {	
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;	
		let formData = new FormData()		
		formData.append('productName', productName);
		formData.append('description', description);
		formData.append('sellingPrice', sellingPrice);
		formData.append('stock', stock);
		formData.append('isActive', isActive);
		formData.append('productImg', productImg);	

		// Created two API to let user choose to upload a new image or not
		if (productImg) {
			 await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}/update-product`, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${userCredentials}`
				},			
				body: formData
			}).then(res => res.json()).then(newData => {})
			await Swal.fire({
			 		position: 'center',
			 		icon: "success",
			 		text: "Update successful",
			 		showConfirmButton: false,
			 		timer: 1500
			 	});		
		} else {
			await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}/update-no-image`, {
				method: 'PUT',
				headers: {
					'Content-Type' : 'application/json',
					Authorization: `Bearer ${userCredentials}`
				},
				body: JSON.stringify({
					productName: productName,
					description: description,
					sellingPrice: sellingPrice,
					stock: stock,
					isActive: isActive
				})
			}).then(res => res.json()).then(newData => {})
			await Swal.fire({
					position: 'center',
					icon: "success",
					text: "Update successful",
					showConfirmButton: false,
					timer: 1500
				});	
		}	
		window.location.href="/manage-product";	
	};

	return (
		<div>
			<div>
				<Helmet>
					<title>Puppy Paws | Update</title>
				</Helmet>
			</div>

			{/*This will appear for large screen*/}
			<Container className="editForm">
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
					 />
					 <p><small>Choose jpg, png, or jpeg file type, and a maximum of 5MB.</small></p>
					 <Button onClick={e => productUpdate(e)} className="createBtn">Update Product Info</Button>						 			
				</Form>
				</Col>
			</Container>	
			
			{/*This will appear for small screen*/}
			<Form className="p-5 smallScrnEdit">
				<Form.Group className="formText">
					<Form.Label>Product Name</Form.Label>
					<Form.Control					
					type="text"
					required
					value={productName}
					onChange={e => setProductName(e.target.value)}
					className="inputField"
					
					 />						
				</Form.Group>

				<Form.Group className="formText">
					<Form.Label>Description</Form.Label>
					<Form.Control 
					type="text" 
					required
					value={description}
					onChange={(e) => {setDescription(e.target.value)}}
					className="inputField"
							
					/>
				</Form.Group>

				<Form.Group className="formText">
					<Form.Label>Price</Form.Label>
					<Form.Control 
					type="number" 
					required
					value={sellingPrice}
					onChange={(e) => {setSellingPrice(e.target.value)}}
					className="inputField"
						
				 	/>
				</Form.Group>	

				<Form.Group className="formText">
					<Form.Label>Stock</Form.Label>
					<Form.Control 
					type="number" 
					required
					value={stock}
					onChange={(e) => {setStock(e.target.value)}}
					className="inputField"
										
					/>
				</Form.Group>

				<div className="mb-4 formText">
					<input 
					type="checkbox"
					checked={isActive}
					onChange={toggleChecked}

					/> Display product as Active
				</div>					

				<input 
				type="file"								 
				onChange={e => setProductImg(e.target.files[0])}
				className="formText"
				 />
				 <p className="formText"><small>Choose jpg, png, or jpeg file type, and a maximum of 5MB.</small></p>
				 <Button onClick={e => productUpdate(e)} className="createBtn">Update Product Info</Button>						 			
			</Form>			
		</div>
	)
}


