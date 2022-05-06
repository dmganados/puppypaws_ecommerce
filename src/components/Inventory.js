import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Inventory({inventoryProp}) {
	let id = inventoryProp._id;	
	let invName = inventoryProp.productName;
	let invDescription = inventoryProp.description;
	let invPrice = inventoryProp.sellingPrice;
	let invStock = inventoryProp.stock;
	let status = inventoryProp.isActive;
	let strStatus = status === true ? 'Active' : 'Inactive';	
	let image = inventoryProp.productImg;
	// console.log(inventoryProp)


	return(

		<div>	
					
			<Card className="mt-2 cardInventory">
				<Card.Body className="cardText">
					<img style={{width:100, height:120}} className="img" src={image} />				
					<Card.Title className="title">{invName}</Card.Title>					
					<Card.Text className="subtext">{invDescription}</Card.Text>
					<Card.Text className="subtext">Selling Price: PHP {invPrice} </Card.Text>
					<Card.Text className="subtext">Stock: {invStock}</Card.Text>
					<Card.Text className="subtext">Status: {strStatus} </Card.Text>
					<Link to={"update-product/" + id} className="mr-3" id="editFunction" >Update</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	
		</div>



	)
}