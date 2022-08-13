import {Row, Col, Container} from 'react-bootstrap';

export default function Theme() {
	return(
		<Container>
			<Row className=" cardPosition">
				<Col className="">
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316581/theme%20photos/manja-vitolic-bxvrvRNxksg-unsplash_fjkd0e.jpg" alt="" className="themeTopImage" />
					<span className="themeTopText">Pet House</span>
											
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378475/theme%20photos/sam-moghadam-khamseh-t7iQx78aQVw-unsplash_b97ktr.jpg" className="themeTopImageFood" alt="" />
					<span className="themeTopText">Pet Food</span>			
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/karsten-winegeart-sytld_poGLc-unsplash_bj8zrz.jpg" className="themeTopImage" alt="" />
					<span className="themeTopText">Pet Accessories</span>
				</Col>
			</Row>
		</Container>
	)
}