import { Card, Row, Col, Container, Button } from 'react-bootstrap'
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
	// console.log(id)


	return(

		<div>				
			<Card className="mt-2 inventoryCard">
				<Card.Body className="cardText">
			 		<img src={image} className="sellerImg"  />				
			 		<Card.Title className="title">{invName}</Card.Title>					
			 		{/*<Card.Text className="subtext">{invDescription}</Card.Text>*/}
			 		<Card.Text className="subtext">Selling Price: PHP {invPrice} </Card.Text>
			 		<Card.Text className="subtext">Stock: {invStock}</Card.Text>
			 		<Card.Text className="subtext">Status: {strStatus} </Card.Text>
			 		<Button href={"/manage-product/update-product/" + id } className="mr-3" id="editFunction" >Update</Button>
			 		<Button to="" id="deleteFunction">Delete</Button>
			 	</Card.Body>							
			 </Card>	
		</div>
	)
}