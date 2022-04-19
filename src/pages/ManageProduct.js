// Make a Create Button and create page
	// In the create page include upload photo option
	// Description
	// Price
	// Product Name
// Lists of all active and inactive products
// Button and page to update product info
// Button to deactivate and reactivate product
// Do all these in a separate module

import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../components/Inventory';
import { useState, useEffect } from 'react';


export default function ManageProduct() {

	const [inventoryCollection, setInventoryCollection] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/products/all',).then(res => res.json()).then(inventoryData => {
			// console.log(inventoryData)
			setInventoryCollection(inventoryData.map(inventory => {
				return(
					<Inventory key={inventory._id} inventoryProp={inventory} />
					// console.log(inventoryProp)
				)
			}));
		});
	});

	return(
		<>
			<Container>			
				<Button className="mt-5 createBtn" href="/create-product">Create Product +</Button>
				{inventoryCollection}
			</Container>
		</>
	)
}

