import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Cart() {

	const [ordersCollection, setOrdersCollection] = useState([]);	
	const [total, setTotal] = useState('')
	let userCredentials = localStorage.accessToken;

	// Get the order list
	useEffect(async() => {

		await fetch('https://limitless-brushlands-90925.herokuapp.com/orders/customer-orders', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userCredentials}`
			}
		}).then(res => res.json()).then(order => {
			let granTotal = order.totalAmount;
			let orderList = order.orders;
			let notZero = orderList.filter(obj => obj.subtotal > 0);
			setOrdersCollection(notZero);	
			setTotal(granTotal);		
		});	
		
	},[]);


	// Displaying the order list in the table
	const displayOrders = (val, key) => {
		let id = val.productId;
		let amount = val
		// let result = amount.includes('null', 0)
		// console.log(val)
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

	// Try to work on removing an order
	return (
		<div className="App">
			<Container>
				<table className="table table-striped mt-5">
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

					{/*<Row>
						<Col>
							<td className="grossTotal"><h5 >Total Amount: </h5></td>	
						</Col>
					</Row>*/}
				</table>
				<Row >
					<Col >
						<h5 className="totalAmount">Total Amount: </h5>
					</Col>
					
					<Col className="total">
					<span >PHP {total}</span>
					</Col>
				</Row>
				<Button className="mt-3 checkout">Checkout</Button>

			</Container>		
		</div>
	)
}