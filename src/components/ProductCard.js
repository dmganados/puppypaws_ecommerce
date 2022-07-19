import {Card, Row, Col, Container, Button} from 'react-bootstrap';
import shoes from './banner/nike_running_shoes.jpg';
import { Link } from 'react-router-dom';



export default function ProductCard({productProp}) {
	let id = productProp._id;
	let specific = {id};
	let image = productProp.productImg;
	// console.log(specific)
	// console.log(id)

	return(
		<Col xs={12} md={12} className="p-2" >
		
			<Card className="p-1 mt-3">
				<img style={{width:190, height:200}} src={image} className="d-inline mt-3 img" />
				<Card.Body className="d-inline cardText">					
					<Card.Title to={"/products/:productId"} className="title">
						{productProp.productName}
					</Card.Title>
					<Card.Text className="subtext">
						{productProp.description}
					</Card.Text>
					<Card.Text className="subtext">
						Price: PHP {productProp.sellingPrice}
					</Card.Text>
					<Button href={"/products/" + id } className="btn btn-sm buttonColor">View Product</Button>
				</Card.Body>
			</Card>
		
		</Col>
	)
}