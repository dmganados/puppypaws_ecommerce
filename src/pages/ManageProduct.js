import { Button, Col, Row, Container, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Inventory from '../components/Inventory';
import Edit from '../pages/Edit';
import { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';


export default function ManageProduct() {

	
	const [inventoryCollection, setInventoryCollection] = useState([]);	
	let [inventory, setInventory] = useState([]);
	let [listings, setListings] = useState([])	
	let userCredentials = localStorage.accessToken;		

	useEffect(async() =>  {		

		
		// Fetch endpoint for all the products
		await fetch('https://limitless-brushlands-90925.herokuapp.com/products/all', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(inventoryData => {	
			setInventoryCollection(inventoryData);				
		});
	},[]);


	// Getting the data of each product
	const listingData = (val, key) => {	
		let image = val.productImg
		let id = val._id
		let status = val.isActive
		let listStatus = status === true ? 'Active' : 'Inactive';			

		// Delete function
		const remove = async () => {
			await Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#084887',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.isConfirmed) {
					fetch(`http://localhost:8000/products/${id}/delete`, {
						method: 'DELETE',
						headers: {
							Authorization: `Bearer ${userCredentials}`
						}
					}).then(res => res.json()).then(removeData => {})
						Swal.fire(
							'Deleted!',
							'Your file has been deleted.',
							'success'
						);
				}
			})	
			window.location.href="/manage-product";			
		}

		// Tables and data for all the product listing
		return(
			<tr key={key}>
				<td><img style={{width:50, height:70}} src={image} /></td>
				<td>{val.productName}</td>
				<td>P{val.sellingPrice}</td>
				<td>{val.stock}</td>
				<td>{listStatus}</td>
				<td>
					<Button href={"/manage-product/update-product/" + id } className="mr-4">Update</Button>
					<Button onClick={e => remove(e)} className="btn-danger">Delete</Button>
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

