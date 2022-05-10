import { useState, useEffect, Component } from 'react';
import { Container, Col, Form, Button,  } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import Upload from './Uploads'

// Work on handling form-data format or a way to upload file through react.

export default function CreateProduct() {

	// let fileUpload = Upload

	// let [productName, setProductName] = useState('');
	// let [description, setDescription] = useState('');
	// let [sellingPrice, setSellingPrice] = useState('');
	// let [stock, setStock] = useState('');
	// let [image, setImage] = useState([])
	// let [isFilled, setIsFilled] = useState(false);
	// let [isActive, setIsActive] = useState(false);
	// let [productImg, setProductImg] = useState('')
	// let toggleChecked = () => setIsActive(value => !value)
	// let [file, setFile] = useState();
	// let [fileName, setFileName] = useState("");
	// let formData = new FormData();
	// console.log(Preview)


	// useEffect(() => {
	// 	if (productName !== '' && description !== '' && sellingPrice !== '' && stock !== '') {
	// 		setIsFilled(true);
	// 	} else {
	// 		setIsFilled(false);
	// 	}
	// },[productName, description, sellingPrice, stock])


	const constructor = (props) => {
		// super(props);

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			productName: '',
			description: '',
			sellingPrice: '',
			stock: '',
			productImg: ''
		}
	}

	// const onFileChange = (e) => {
	// 	this.setState({
	// 		productName: e.target.files[0],
	// 		description: e.target.
	// 	})
	// }
	
	const createListing = async (submitEvent) => {		
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;		
		let formData = new FormData()
		// formData.append('productName', productName)
		// formData.append('description', description)
		// formData.append('sellingPrice', sellingPrice)
		// formData.append('stock', stock)
		// formData.append('productImg', productImg)
		// axios.post("https://limitless-brushlands-90925.herokuapp.com/products/", formData, {			
		// 	headers: {
		// 		Authorization: `Bearer ${userCredentials}`,
		// 		'Content-Type' : 'multipart/form-data'
		// 	}
		// }).then(res => {
		// 	console.log(res)
		// })

		// const isCreated = await fetch('https://limitless-brushlands-90925.herokuapp.com/products/', {
		// 	method: 'POST',
		// 	headers: {
		// 		Authorization: `Bearer ${userCredentials}`,
		// 		'Content-Type' : 'multipart/form-data'
		// 	}, 
		// 	body: formData
		// }).then(result => result.json()).then(itemData => {
		// 	console.log(itemData)
		// 	if (itemData) {
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}

		// })

		// if (isCreated) {
		// 	setProductName('');
		// 	setDescription('');
		// 	setSellingPrice('');
		// 	setStock('');
		// 	setIsActive(false);

		// 	await Swal.fire({
		// 		icon: "success",
		// 		text: "New product listing is created"
		// 	});

		// 	window.location.href="/manage-product";
		// } else {
		// 	await Swal.fire({
		// 		icon: "error",
		// 		text: "Check all fields"
		// 	});
		// }		
	};	

	
	return(
		<>

		<Container>
		<Col className='p-5'>
			<Form  >
				{/*<Form.Group>
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
				</Form.Group>*/}

				{/*<div className="mb-4">
					<input 
					type="checkbox" 
					checked={isActive} 					
					onChange={toggleChecked} /> Display product as Active
				</div>*/}

				

				{/*<input type="file" onChange={fileUpload} /><br/> <br/>*/}
				{/*<Button >Upload</Button>  <br/> <br/>*/}
			{/*Work on saving images online
				Upload image through react
				
				*/}

				{/*<Upload />*/}

				{/*{
					isFilled ?
						<Button onClick={e => createListing(e)} className="createBtn" type="submit">Create Product</Button>	
					:
						<Button className="createBtn" disabled>Create Product</Button>	
				}*/}
					
				{/*<Upload />*/}
				
			</Form>
			<Upload />

		</Col>			
		</Container>
		</>
	)

}
