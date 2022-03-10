import {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import ProductCard from './../components/ProductCard';

export default function Catalog() {

	const [productCollection, setProductCollection] = useState([]);

	useEffect(() => {
		fetch('https://limitless-brushlands-90925.herokuapp.com/products/all-active').then(res => res.json()).then(productData => {
			setProductCollection(productData.map(products => {
				return(
					<ProductCard key={products._id}
					productProp={products} />
				)
			}));
		});
	},[]);
	return(
		<>
			<Container>
				<Row>
					{productCollection}
				</Row>
			</Container>
		</>
	)
}