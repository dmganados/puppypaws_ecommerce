import {Button, Container, Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function ProductInfo() {

	const {id} = useParams();
	let [productName, setProductName] = useState('');
	let [productImage, setProductImage] = useState('');
	let [description, setDescription] = useState('');
	let [sellingPrice, setSellingPrice] = useState('');

	// console.log(productName)
	useEffect(() => {
		pruductDetails();
	},[])

	const pruductDetails = async () => {
		await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(data =>
		{
			setProductName(data.productName);
			setProductImage(data.productImg);
			setDescription(data.description);
			setSellingPrice(data.sellingPrice);
			// console.log(data.productImg)
		})

	}

	return(
		<div>
			<Container className="productInfo">
				<Row>
					<Col>
						<img src={productImage} className="infoImage" />
					</Col>
					<Col className="infoText">
						<h1>{productName}</h1>	
						<p>{description}</p>
						<h3>PHP {sellingPrice}</h3><br/>
						<h6>Quantity</h6><br/>	
						<input type="number" min="1"  />	<br/><br/>
						<Button className="createBtn">Add to Cart</Button>

						
					</Col>				
				</Row>				
			</Container>		

		
			
		</div>
	)
}