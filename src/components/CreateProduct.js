import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';

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
					<Dropdown>
					<Form.Label className="d-block">Category</Form.Label>
					<Dropdown.Toggle></Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>Phone</Dropdown.Item>
						<Dropdown.Item>Electronics</Dropdown.Item>
					</Dropdown.Menu>
					</Dropdown>
				</Form.Group>

				<Form.Group>
					<Form.Label>Stock</Form.Label>
					<Form.Control type="number" required />
				</Form.Group>

				<div className="mb-4">
					<input type="checkbox" /> Display product on the Catalog
				</div>

				<Button className="createBtn">Create Product</Button>
			</Form>
		</Container>
		</>
	)
}