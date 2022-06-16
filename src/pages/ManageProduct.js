// Make a Create Button and create page
	// In the create page include upload photo option
	// Description
	// Price
	// Product Name
// Lists of all active and inactive products
// Button and page to update product info
// Button to deactivate and reactivate product
// Do all these in a separate module

import { Button, Col, Row, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../components/Inventory';
import Edit from '../pages/Edit';
import { useState, useEffect } from 'react';
import { useTable } from 'react-table';


export default function ManageProduct() {

	const [inventoryCollection, setInventoryCollection] = useState([]);	
	let [inventory, setInventory] = useState('');	
	let userCredentials = localStorage.accessToken;
	
	
	let newData = inventory
	let data = [
		{
			productName: "Iwatch",
			sellingPrice: 200,
			status: "Active"
		},
		{
			productName: "Phone",
			sellingPrice: 500,
			status: "Inactive"
		}
	]
	
	// console.log(newData)

	// Create a table for the inventory
	// Get the boolean
	// Resolve the .map error

	useEffect(async() =>  {	
		
		let unmounted = false;

		await fetch('https://limitless-brushlands-90925.herokuapp.com/products/all', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(inventoryData => {	
			setInventoryCollection(inventoryData);
			// if (!unmounted) {
			// 	setInventoryCollection(inventoryData.map(inventoryInfo => {	
			// 		setInventory(inventoryInfo);
			// 	}));
			// }		
			// return () => {
			// 	unmounted = true;
			// }		
				
		});
	},[]);

	const listingData = (val, key) => {
		let status = val.isActive
		let listStatus = status === true ? 'Active' : 'Inactive';
		// console.log(val.isActive)
		return(
			<tr key={key}>
				<td>{val.productName}</td>
				<td>P{val.sellingPrice}</td>
				<td>{listStatus}</td>
				<td data-href="update-product/">Update</td>
				{/*<Link>Update</Link>*/}
			</tr>
		)
	}



	return(
		<div className="App">
			<Container>			
				<Button className="mt-5 createBtn" href="/create-product">Create Product +</Button>		

				<table className="table table-striped mt-4">
					<thead>
					<tr>
						<th>Product Name</th>
						<th>Price</th>
						<th>Status</th>
						<th>Update/Delete</th>
					</tr>
					</thead>
					<tbody>
						{inventoryCollection.map(listingData)}
						{/*<Link>Update</Link>*/}
					</tbody>
					
				</table>

			</Container>
		</div>
	)
}

