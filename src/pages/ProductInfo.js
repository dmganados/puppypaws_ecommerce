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
		addToCart();
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
	// console.log(pruductDetails)

	// Work on preventDefault
	// Continue if else
	// Work on Cart

	const addToCart = async (submitEvent) => {
		submitEvent.preventDefault();
		let userCredentials = localStorage.accessToken;	

		await fetch('http://localhost:8000/orders/create-order/', {
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
			if (cart) {
				setQuantity('');
				Swal.fire({
				  position: 'center',
				  icon: 'success',
				  title: 'New product is added to your cart',
				  showConfirmButton: false,
				  timer: 1500
				})
			} else {

			}
		})
	}

	return(
		<div>
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

		
			
		</div>
	)
}