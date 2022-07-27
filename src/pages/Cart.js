import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Cart() {
	return (
		<div>
			<Container>
				<table className="table table-striped mt-4 productTable">
					<thead>
						<tr>
							<th>Image</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>

						</tr>
					</thead>
				</table>
			</Container>
		</div>
	)
}