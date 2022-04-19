import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Inventory({inventoryProp}) {
	let invName = inventoryProp.productName;
	let invDescription = inventoryProp.description;
	let invPrice = inventoryProp.sellingPrice;
	let invStock = inventoryProp.stock;
	let status = inventoryProp.isActive;
	let strStatus = status === true ? 'Active' : 'Inactive';
	

	return(

		<div>	
					
			<Card className="cardInventory">
				<Card.Body>				
					<Card.Title>{invName}</Card.Title>
					<Card.Text>{invDescription}</Card.Text>
					<Card.Text>Selling Price: PHP {invPrice} </Card.Text>
					<Card.Text>Stock: {invStock}</Card.Text>
					<Card.Text className="d-inline">Status: {strStatus} </Card.Text>				

					<Link to="" className="mr-3" id="editFunction">Edit</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	
		</div>



	)
}