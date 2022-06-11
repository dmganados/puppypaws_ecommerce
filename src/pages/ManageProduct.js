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
	let status = inventory.isActive
	let listStatus = status === true ? 'Active' : 'Inactive';
	const columns = [
		{
			Header: 'Product Name',
			accessor: 'productName'
		},
		{
			Header: 'Price',
			accessor: 'sellingPrice'
		}
	]
	// console.log(inventory)

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
			setInventory(inventoryData)		
			// if (!unmounted) {
			// 	setInventoryCollection(inventoryData.map(inventoryInfo => {	
			// 		// console.log(inventoryInfo);
			// 	}));
			// }		
			// return () => {
			// 	unmounted = true;
			// }			
		});
	},[]);

	return(
		<div className="App">
			<Container>			
				<Button className="mt-5 createBtn" href="/create-product">Create Product +</Button>		

				<table>
					<tr>
						<th>Product Name</th>
						<th>Price</th>
						<th>Status</th>
					</tr>
					{inventory.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.productName}</td>
								<td>{val.sellingPrice}</td>
								<td>{val.isActive}</td>
							</tr>
						)
					})}

					{/*<tr>
						<td>I Watch</td>
						<td>P 5000</td>
						<td>Active</td>
					</tr>
					<tr>
						<td>Go Pro</td>
						<td>P 8000</td>
						<td>Active</td>
					</tr>*/}
				</table>

			</Container>
		</div>
	)
}

