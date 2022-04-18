import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Inventory() {

	return(
		<div>
			<Card className="cardInventory">
				<Card.Body>				
					<Card.Title>Product Name</Card.Title>
					<Card.Text>Description</Card.Text>
					<Card.Text>Selling Price: PHP</Card.Text>
					<Card.Text className="d-inline">Status:</Card.Text>				
					<Link to="" className="mr-4" id="editFunction">Edit</Link>
					<Link to="" id="deleteFunction">Delete</Link>
				</Card.Body>				
			</Card>	
		</div>
	)
}