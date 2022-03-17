import {Row, Col, Card, Container} from 'react-bootstrap';
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
							<Card.Img src={phone} className="img-fluid mb-2 mr-2 p-2 d-inline gadgetImage1" />
							<Card.Img src={vReality} className="img-fluid mb-2 d-none d-sm-none d-md-block d-lg-inline gadgetImage2" width="150" />
							<Col className="d-block">
							<Card.Img src={headphones} className="img-fluid gadgetImage3" />
							<Card.Img src={airpods} className="img-fluid gadgetImage4" />
							</Col>

							<Card.Title className="pt-4">Phones and Gadgets</Card.Title>
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