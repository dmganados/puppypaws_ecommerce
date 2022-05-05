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
					
			<Card className="cardInventory">
				<img className="p-3 mt-2 img" src={image} />
				<Card.Body className=" cardText">				
					<Card.Title>{invName}</Card.Title>					
					<Card.Text>{invDescription}</Card.Text>
					<Card.Text>Selling Price: PHP {invPrice} </Card.Text>
					<Card.Text>Stock: {invStock}</Card.Text>
					<Card.Text className="">Status: {strStatus} </Card.Text>


					<Link to={"update-product/" + id} className="mr-3" id="editFunction" >Update</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	
		</div>



	)
}