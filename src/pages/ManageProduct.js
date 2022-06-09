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
	let [inventory, setInventory] = useState([]);	
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
			if (!unmounted) {
				setInventoryCollection(inventoryData.map(inventoryInfo => {	
					setInventory(inventoryInfo);
				}));
			}		
			return () => {
				unmounted = true;
			}			
		});
	},[]);

	return(
		<>
			<Container>			
				<Button className="mt-5 createBtn" href="/create-product">Create Product +</Button>

				
				{/*{inventoryCollection}	*/}
				{/*<Table className="table mt-3">*/}
					{/*<thead>
						<tr>							
							<th scope="col">Product Name</th>							
							<th scope="col">Selling Price</th>
							<th scope="col">Stock</th>
							<th scope="col">Status</th>
							<th scope="col">Update/Delete</th>
						</tr>
					</thead>*/}
					{/*<tbody>*/}
						
						{/*<tr>
							<td>{inventory.productName}</td>
							<td>${inventory.sellingPrice}</td>
						</tr>*/}
						{/*{inventory.map((item) => (
							<tr>
								<td>{item.productName}</td>
								<td>${item.sellingPrice}</td>
							</tr>
							))}
*/}

						
						{/*{inventory.map((items) => ( 
						<tr>						
							<td>{items.productName}</td>							
							<td>${items.sellingPrice}</td>
							<td>{items.stock}</td>
							<td>{listStatus}</td>
							<td></td>
						</tr>
						))}*/}
						
					{/*</tbody>*/}
				{/*</Table>					*/}
			</Container>

		</>
	)
}

