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
import { Link, useParams } from 'react-router-dom';
import Inventory from '../components/Inventory';
import Edit from '../pages/Edit';
import { useState, useEffect } from 'react';
import { useTable } from 'react-table';


export default function ManageProduct() {

	
	const [inventoryCollection, setInventoryCollection] = useState([]);	
	let [inventory, setInventory] = useState([]);
	let [listings, setListings] = useState([])	
	// let id = listings._id
	let userCredentials = localStorage.accessToken;	
	// console.log(id)
	// let unmounted = false;
	// if (!unmounted) {
	// 	setInventory(inventoryCollection.map(inventoryInfo => {	
	// 		setListings(inventoryInfo)
	// 	}));
	// }		
	// return () => {
	// 	unmounted = true;
	// }		

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
			// 	setInventory(inventoryData.map(inventoryInfo => {	
			// 		setListings(inventoryInfo)
			// 	}));
			// }		
			// return () => {
			// 	unmounted = true;
			// }		
				
		});
	},[]);

	const listingData = (val, key) => {
		// console.log(val.productImg)
		let image = val.productImg
		let id = val._id
		let status = val.isActive
		let listStatus = status === true ? 'Active' : 'Inactive';		
		return(
			<tr key={key}>
				<td><img style={{width:50, height:70}} src={image} /></td>
				<td>{val.productName}</td>
				<td>P{val.sellingPrice}</td>
				<td>{val.stock}</td>
				<td>{listStatus}</td>
				<td>
					<Link to={"/manage-product/update-product/" + id } className="mr-4">Update</Link>
					<Link to={"/manage-product/update-product/" + id }>Delete</Link>
				</td>

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
						<th>Image</th>
						<th>Product Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Status</th>
						<th>Update/Delete</th>
					</tr>
					</thead>
					<tbody>
						{inventoryCollection.map(listingData)}						
					</tbody>
					
				</table>

			</Container>
		</div>
	)
}

