import {Row, Col, Card, Container, Image} from 'react-bootstrap';
import phone from './banner/phone1.png'
import vReality from './banner/vr_glass.jpg'
import headphones from './banner/headphones.jpg'
import airpods from './banner/airpods.jpg'

export default function Theme() {
	return(
		<Container>
			<Row className="my-3 cardPosition">
				<Col xs={12} md={4}>
					<Card className="p-4 cardHighlight">
						<Card.Body>
							<Card.Img src={phone} className="img-fluid mb-2 mr-2 gadgetImage1" />
							<Card.Img src={vReality} className="img-fluid mb-2 gadgetImage2" />
							<Card.Img src={headphones} className="img-fluid d-block mr-2 gadgetImage3" />
							<Card.Img src={airpods} className="img-fluid gadgetImage4" />

							<Card.Title className="">Phones and Gadgets</Card.Title>
							<Card.Text >
								See more		
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
				<Col xs={12} md={4}>
					<Card className="p-4 cardHighlight">
						<Card.Body>
							<Card.Title>E-commerce</Card.Title>
							<Card.Text>
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ea, quas?		
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
				<Col xs={12} md={4}>
					<Card className="p-4 cardHighlight">
						<Card.Body>
							<Card.Title>E-commerce</Card.Title>
							<Card.Text>
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ea, quas?		
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
			</Row>
		</Container>
	)
}