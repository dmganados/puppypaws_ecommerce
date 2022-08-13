import {Row, Col, Container} from 'react-bootstrap';

export default function Theme() {
	return(
		<div>
		<Container>
			<Row className=" cardPosition">
				<Col className="">
					<h4 className="themeTopText">PET HOUSE</h4>
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316581/theme%20photos/manja-vitolic-bxvrvRNxksg-unsplash_fjkd0e.jpg" alt="" className="themeTopImage" />				
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<h4 className="themeTopText">PET FOOD</h4>	
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378475/theme%20photos/sam-moghadam-khamseh-t7iQx78aQVw-unsplash_b97ktr.jpg" className="themeTopImageFood" alt="" />
							
				</Col>
				<Col xs={12} md={4} className="mb-4">
					<h4 className="themeTopText">PET ACCESSORIES</h4>
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/karsten-winegeart-sytld_poGLc-unsplash_bj8zrz.jpg" className="themeTopImage" alt="" />		
				</Col>
			</Row>			
		</Container>
		<div className="bottomThemeDiv">
			<Container>
				<Row className="rowThemeImg1">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378025/theme%20photos/marthijn-brinks-XiHyfOKmDIs-unsplash_cgyqth.jpg" alt=""  className="themeBottomImg" />
					</Col>
				</Row>

			{/*
			Work on the theme images
			Deploy project

			*/}


				<Row className="rowThemeImg2">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/daniel-lincoln-UNGYOAr0w5k-unsplash_y39ws3.jpg" alt="" className="themeBottomImg" />
					</Col>
				</Row>
			</Container>		
		</div>
		</div>
	)
}