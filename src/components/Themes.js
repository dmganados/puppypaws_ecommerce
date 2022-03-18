import {Row, Col, Card, Container} from 'react-bootstrap';
import phone from './banner/phone1.png'
import vReality from './banner/vr_glass.jpg'
import controller from './banner/controller.jpg'
import airpods from './banner/airpods.jpg'

export default function Theme() {
	return(
		<Container>
			<Row className="my-3 cardPosition">
				<Col xs={12} md={4}>
					<Card className="p-4 cardHighlight">
						<Card.Body>
							<Col>
							<Card.Img src={phone} className="img-fluid mb-2 mr-2 p-1 d-inline gadgetImage1" />
							<Card.Img src={vReality} className="img-fluid mb-2 p-1 d-none d-sm-none d-md-inline d-lg-inline gadgetImage2" width="150" />
							</Col>
							<Col>
							<Card.Img src={airpods} className="img-fluid d-none d-sm-none d-md-inline d-lg-inline mr-2 p-1 gadgetImage3" />
							<Card.Img src={controller} className="img-fluid d-none d-sm-none d-md-inline d-lg-inline p-2 gadgetImage4" />							
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