import {Button, Col, Row, Container, Form} from 'react-bootstrap'

export default function Edit () {

	return (
		<div>
		<Container>
			<Col>
				<Form className="p-5">
					<Form.Group>
						<Form.Label>Product Name</Form.Label>
						<Form.Control
						type="text"
						required
						 />
					</Form.Group>

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control 
						type="text" 
						required						 
						/>
					</Form.Group>

					<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control 
					type="number" 
					required					
					/>
					</Form.Group>	

					<Form.Group>
						<Form.Label>Stock</Form.Label>
						<Form.Control 
						type="number" 
						required						
						/>
					</Form.Group>

					<div className="mb-4">
						<input 
						type="checkbox" 
						/> Display product as Active
					</div>

					<Button className="createBtn" type="submit">Update Product Info</Button>	
				</Form>
			</Col>
		</Container>
		</div>
	)
}