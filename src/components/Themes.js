import {Row, Col, Card, Container} from 'react-bootstrap';

export default function Theme() {
	return(
		<Container>
			<Row className=" cardPosition">
				<Col xs={12} md={4} className="mb-4 mt-lg-0 mt-md-0 mt-sm-5 align-items-end">
					<Card className="cardHighlight">
						<Card.Body>
							<Col>
							<Card.Img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/karsten-winegeart-sytld_poGLc-unsplash_bj8zrz.jpg" className="img-fluid mb-2 mr-2 p-1 d-inline d-sm-inline d-md-inline d-lg-inline gadgetImage1" />
							<Card.Img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315649/theme%20photos/alicja-gancarz-e3EHK9pzmLU-unsplash_lpigy2.jpg" className="img-fluid mb-2 p-1 d-inline d-sm-inline d-md-inline d-lg-inline gadgetImage2" width="150" />
							</Col>
							<Col>
							<Card.Img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316581/theme%20photos/manja-vitolic-bxvrvRNxksg-unsplash_fjkd0e.jpg" className="img-fluid d-inline d-sm-inline d-md-inline d-lg-inline mr-2 p-1 gadgetImage3" />
							<Card.Img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/daniel-lincoln-UNGYOAr0w5k-unsplash_y39ws3.jpg" className="img-fluid d-inline d-sm-inline d-md-inline d-lg-inline p-2 gadgetImage4" />							
							</Col>

							<Card.Title className="pt-4 fw-bolder themeText">Phones and Gadgets</Card.Title>
							<Card.Text className="themeSubtext">
								<a href="/catalog">See more	</a>	
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Card className="cardHighlight">
						<Card.Body>
							<Card.Title className="themeText">E-commerce</Card.Title>
							<Card.Text className="themeSubtext">
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ea, quas?		
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<Card className="cardHighlight">
						<Card.Body>
							<Card.Title className="themeText">E-commerce</Card.Title>
							<Card.Text className="themeSubtext">
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ea, quas?		
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
			</Row>
		</Container>
	)
}