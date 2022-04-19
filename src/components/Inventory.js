import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

export default function Inventory({inventoryProp}) {
	let name = inventoryProp.productName;
	let status = inventoryProp.isActive;
	// console.log(id)
	let product = {
		productName : name,
		isActive : status
	}

	// console.log(product)

	return(

		<div>	
					
			<Card className="cardInventory">
				<Card.Body>				
					<Card.Title>{name}</Card.Title>
					<Card.Text>{inventoryProp.description}</Card.Text>
					<Card.Text>Selling Price: PHP {inventoryProp.sellingPrice} </Card.Text>
					<Card.Text>Stock: {inventoryProp.stock}</Card.Text>
					<Card.Text className="d-inline">Status: </Card.Text>				

					<Link to="" className="mr-3" id="editFunction">Edit</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	

		</div>

	)
}