import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Cart() {

	const [ordersCollection, setOrdersCollection] = useState([]);
	let userCredentials = localStorage.accessToken;	
	let ordersObject = ordersCollection.orders;
	// console.log(ordersObject)
	// let data = ordersObject.map(displayOrders)

	// Get the order list
	useEffect(async() => {

		await fetch('https://limitless-brushlands-90925.herokuapp.com/orders/customer-orders', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(orders => {
			setOrdersCollection(orders);
			// console.log(orders)
		})		
		// displayOrders();
	},[])

	// Displaying the order list in the table
	const displayOrders = async (val, key) => {
		// console.log(val.productId)
		// await fetch('https://limitless-brushlands-90925.herokuapp.com/products/:productId')

		// let image = val.productImg
		// console.log(val)

		return(
			<tr key={key}>
				<td></td>
				<td>{val.productName}</td>
				<td>PHP {val.sellingPrice}</td>
				<td>{val.quantity}</td>
				<td>PHP {val.subtotal}</td>
			</tr>
		)

		
	}

	// console.log(displayOrders)	

	// Work on diplaying image
	// Adjust the font of the table
	// Work on diplaying the product info

	return (
		<div className="App">
			<Container>
				<table className="table table-striped mt-4 productTable">
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
						{/*{ordersObject.map(displayOrders)}*/}
					</tbody>
				</table>
			</Container>

			<table className="table table-striped mt-4 tableSmallScrn">
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
						{/*{ordersObject.map(displayOrders)}*/}
					</tbody>
				</table>
		</div>
	)
}