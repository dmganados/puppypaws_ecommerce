import {Card, Row, Col, Container} from 'react-bootstrap';


export default function ProductCard({productProp}) {
	return(
		<Col>
			<Card>
				<Card.Body>
					<Card.Title>
						{productProp.name}
					</Card.Title>
					<Card.Text>
						{productProp.description}
					</Card.Text>
					<Card.Text>
						Price: {productProp.price}
					</Card.Text>

				</Card.Body>
			</Card>
		</Col>
	)
}