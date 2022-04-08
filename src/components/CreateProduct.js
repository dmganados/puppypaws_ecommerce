import { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Main = styled("div")`
	font-family: sans-serif;
	// height: 100vh;
`;

const DropDownContainer = styled("div")`
	border: 2px solid #e5e5e5;
	width: 100%;
	height: 45px;
`;

const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
	padding: 0;
	margin: 0;	
	background: #909CC2;
	border: 2px solid #e5e5e5;	
	&:first-child {
	    padding-top: 0.8em;
	}
`;
const ListItem = styled("li")`
	list-style: none;
	margin-bottom: 0.8em;
`;

const options = ["Phone", "Shirt", "Electronics"]

export default function CreateProduct() {

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = value => () => {
		setSelectedOption(value);
		setIsOpen(false);
		console.log(selectedOption);
	};

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
				<Form.Label>Category</Form.Label>
				<Main>
				<DropDownContainer>
					<DropDownHeader onClick={toggling}>{selectedOption || "Select a Category"}</DropDownHeader>
					{isOpen && (
						<DropDownListContainer>
							<DropDownList>
								{options.map(option => (
								<ListItem onClick={onOptionClicked(option)} key={Math.random()}>{option}</ListItem>
								))}
							</DropDownList>
						</DropDownListContainer>
					)}					
				</DropDownContainer>
				</Main>
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