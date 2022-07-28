import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Cart() {
	return (
		<div>
			<Container>
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
				</table>
			</Container>
		</div>
	)
}