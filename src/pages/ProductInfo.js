import {Button, Container, Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from './Cart';
import Swal from 'sweetalert2';


export default function ProductInfo() {

	const {id} = useParams();
	let [productName, setProductName] = useState('');
	let [productImage, setProductImage] = useState('');
	let [description, setDescription] = useState('');
	let [sellingPrice, setSellingPrice] = useState('');
	let [quantity, setQuantity] = useState('');

	// console.log(productName)
	useEffect(() => {
		pruductDetails();		
	},[])

	// Display the product information
	const pruductDetails = async () => {
		await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(data =>
		{
			setProductName(data.productName);
			setProductImage(data.productImg);
			setDescription(data.description);
			setSellingPrice(data.sellingPrice);			
			
		})

	}
		
	// Function for adding products to the cart	
	const addToCart = async (submitEvent) => {
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;	

		await fetch('https://limitless-brushlands-90925.herokuapp.com/orders/create-order/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userCredentials}`
			},
			body: JSON.stringify({
				productId: id,
				quantity: quantity
			})
		}).then(res => res.json()).then(cart => {

			// User will receive responses if quantity field is filled or not
			if (quantity != 0) {
				setQuantity('');
				Swal.fire({
				  position: 'center',
				  icon: 'success',
				  title: 'New product is added to your cart',
				  showConfirmButton: false,
				  timer: 1500
				})
			} else {
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  title: 'Quantity is required',
				  showConfirmButton: false,
				  timer: 1500
				})
			}
		})
	}

	return(
		<div>
			{/*This appears in large screen*/}
			<Container className="productInfo">
				<Row>
					<Col>
						<img src={productImage} className="infoImage" />
					</Col>
					<Col>
						<h1 className="infoTitle">{productName}</h1>	
						<p className="infoDescrip">{description}</p>
						<h3 className="infoPrice">PHP {sellingPrice}</h3><br/>
						<h6 className="infoQuantity">Quantity</h6>	
						<input type="number" min="1" className="infoInput" value={quantity} onChange={e=> setQuantity(e.target.value)} />	<br/><br/>
						<Button onClick={e => addToCart(e)} className="createBtn">Add to Cart</Button>						
					</Col>				
				</Row>				
			</Container>	

		{/*This appears in small screen*/}
			<Container className="productInfoSmlScrn">				
					<img src={productImage} className="infoImage" />					
					<Col>
						<h1 className="infoTitle">{productName}</h1>
					</Col>					
					<p className="infoDescrip">{description}</p>
					<h3 className="infoPrice">PHP {sellingPrice}</h3>
					<h6 className="infoQuantity">Quantity</h6>	
					<input type="number" min="1" className="infoInput" value={quantity} onChange={e=> setQuantity(e.target.value)} />	<br/><br/>
					<Button onClick={e => addToCart(e)} className="createBtn">Add to Cart</Button>

			</Container>	

				
				
		
			
		</div>
	)
}