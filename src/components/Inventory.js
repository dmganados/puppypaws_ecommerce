import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Inventory({inventoryProp}) {
	let id = inventoryProp._id;
	let invName = inventoryProp.productName;
	let invDescription = inventoryProp.description;
	let invPrice = inventoryProp.sellingPrice;
	let invStock = inventoryProp.stock;
	let status = inventoryProp.isActive;
	let strStatus = status === true ? 'Active' : 'Inactive';
	const [productInfo, setProductInfo] = useState([])
	// console.log(productInfo)

	// Fill the Edit form with the listing information according to the listing you clicked
	// Update the listing information
	

	return(

		<div>	
					
			<Card className="cardInventory">
				<Card.Body>				
					<Card.Title>{invName}</Card.Title>
					<Card.Text>Product ID: {id}</Card.Text>
					<Card.Text>{invDescription}</Card.Text>
					<Card.Text>Selling Price: PHP {invPrice} </Card.Text>
					<Card.Text>Stock: {invStock}</Card.Text>
					<Card.Text className="d-inline">Status: {strStatus} </Card.Text>				

					<Link to="/update-product" className="mr-3" id="editFunction" value={productInfo} onChange={e => setProductInfo(e.target.value)} >Edit</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	
		</div>



	)
}