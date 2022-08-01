import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Cart() {

	const [ordersCollection, setOrdersCollection] = useState([]);	
	let userCredentials = localStorage.accessToken;	

	// Get the order list
	useEffect(async() => {

		await fetch('https://limitless-brushlands-90925.herokuapp.com/orders/customer-orders', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(order => {
			setOrdersCollection(order.orders);					
		});	
		
	},[]);


	// Displaying the order list in the table
	const displayOrders = (val, key) => {
		let id = val.productId;
		return(
			<tr key={key}>
				<td><img style={{width:50, height:70}} src={val.productImg} className="tableImage" /></td>
				<td className="tableData">{val.productName}</td>
				<td className="tableData">PHP {val.sellingPrice}</td>
				<td className="tableData">{val.quantity}</td>
				<td className="tableData">PHP {val.subtotal}</td>
			</tr>
		)		
	}

	// Work on hiding orders with 0 quantity
	// Work on the total amount
	// Try to work on removing an order

	return (
		<div className="App">
			<Container>
				<table className="table table-striped mt-4">
					<thead>
						<tr>
							<th className="tableTitle">Image</th>
							<th className="tableTitle">Product Name</th>
							<th className="tableTitle">Price</th>
							<th className="tableTitle">Quantity</th>
							<th className="tableTitle">Subtotal</th>
						</tr>
					</thead>	
					<tbody>
						{ordersCollection.map(displayOrders)}
					</tbody>
				</table>
			</Container>		
		</div>
	)
}