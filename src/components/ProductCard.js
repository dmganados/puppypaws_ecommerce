import {Card, Row, Col, Container} from 'react-bootstrap';
import shoes from './banner/nike_running_shoes.jpg';


export default function ProductCard({productProp}) {
	let id = productProp._id
	let specific = {id}
	// console.log(specific)
	// console.log(productProp)

	return(
		<Col xs={12} md={12} className="p-2" >
			<Card>
				<Card.Body>
					<Card.Title>
						{productProp.productName}
					</Card.Title>
					<Card.Text>
						{productProp.description}
					</Card.Text>
					<Card.Text>
						Price: PHP {productProp.sellingPrice}
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	)
}