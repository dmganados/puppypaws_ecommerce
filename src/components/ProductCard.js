import {Card, Row, Col, Container} from 'react-bootstrap';
import shoes from './banner/nike_running_shoes.jpg';


export default function ProductCard({productProp}) {
	let id = productProp._id;
	let specific = {id};
	let image = productProp.productImg;
	// console.log(specific)
	// console.log(productProp)

	return(
		<Col xs={12} md={12} className="p-2" >
			<Card className="p-1 mt-4">
				<img style={{width:190, height:200}} src={image} className="d-inline img" />
				<Card.Body className="d-inline cardText">					
					<Card.Title className="title">
						{productProp.productName}
					</Card.Title>
					<Card.Text className="subtext">
						{productProp.description}
					</Card.Text>
					<Card.Text className="subtext">
						Price: PHP {productProp.sellingPrice}
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	)
}