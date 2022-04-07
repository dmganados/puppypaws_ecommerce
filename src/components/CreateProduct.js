import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function CreateProduct() {

	return(
		<>
		<Container>
			<Form className="p-5">
				<Form.Group>
					<Form.Label>Product Name</Form.Label>
					<Form.Control type="text" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control type="text" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Available</Form.Label>
					<Form.Control type="number" required />
				</Form.Group>

				<Button className="createBtn">Create Product</Button>
			</Form>
		</Container>
		</>
	)
}