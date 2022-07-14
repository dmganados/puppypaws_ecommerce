import { Button, Col, Row, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
				console.log(result)
				if (result.isConfirmed) {
					fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}/delete`, {
						method: 'DELETE',
						headers: {
							Authorization: `Bearer ${userCredentials}`
						}
					})									
						Swal.fire({
							title: 'Deleted!',
							text: 'Listing has been destroyed. Refresh to see the result.',	
							icon: 'success',
							showConfirmButton: false						
						});
				}				
			})						
		}

		// Tables and data for all the product listing
		return(
			<tr key={key}>
				<td><img style={{width:50, height:70}} src={image} /></td>
				<td className="tableData">{val.productName}</td>
				<td className="tableData">P{val.sellingPrice}</td>
				<td className="tableData">{val.stock}</td>
				<td className="tableData">{listStatus}</td>
				<td>
					<Button href={"/manage-product/update-product/" + id } className="mr-4 btn-sm buttonColor ">Update</Button>
					<Button onClick={e => remove(e)} className="btn-danger btn-sm">Delete</Button>
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
						<th className="tableTitle">Image</th>
						<th className="tableTitle">Product Name</th>
						<th className="tableTitle">Price</th>
						<th className="tableTitle">Stock</th>
						<th className="tableTitle">Status</th>
						<th className="tableTitle">Update/Delete</th>
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

