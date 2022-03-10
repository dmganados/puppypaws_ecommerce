import {Row, Col, Card, Container} from 'react-bootstrap';

export default function Theme() {
	return(
		<Container>
			<Row>
				<Col>
					<Card classname="p-4 cardHighlight">
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