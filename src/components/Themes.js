import {Row, Col, Container, Button} from 'react-bootstrap';

export default function Theme() {
	return(
		<div>
		<Container>
			<Row className=" cardPosition">
				<Col className="">
					<h4 className="themeTopText">PET HOUSE</h4>
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316581/theme%20photos/manja-vitolic-bxvrvRNxksg-unsplash_fjkd0e.jpg" alt="" className="themeTopImage" />				
				</Col>
				<Col xs={12} md={4} className="">
					<h4 className="themeTopText">PET FOOD</h4>	
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378475/theme%20photos/sam-moghadam-khamseh-t7iQx78aQVw-unsplash_b97ktr.jpg" className="themeTopImageFood" alt="" />
							
				</Col>
				<Col xs={12} md={4} className="">
					<h4 className="themeTopText">PET ACCESSORIES</h4>
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/karsten-winegeart-sytld_poGLc-unsplash_bj8zrz.jpg" className="themeTopImage" alt="" />		
				</Col>
			</Row>			
		</Container>

	{/*This header will only show in small screen*/}
		<h4 className="smScrnThemeTxt">Shop What your Pet Needs</h4>

		<div className="bottomThemeDiv">
				<Row className="bottomThemeText">
					<Col>
						<h4 className="bottomThemeHeader">Shop What your Pet Needs</h4>
					</Col>
				</Row>							
				<Row className="firstCol">

					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378025/theme%20photos/marthijn-brinks-XiHyfOKmDIs-unsplash_cgyqth.jpg" alt="Cat inside the pet house"  className="themeBottomImg" />
					</Col>
				</Row>
				<Row className="secondCol">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315648/theme%20photos/daniel-lincoln-UNGYOAr0w5k-unsplash_y39ws3.jpg" alt="Dog with goggles in the snow" className="themeBottomImg" />
					</Col>
				</Row>
				<Row className="thirdCol">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660378478/theme%20photos/top-view-cat-food-color-year-2022_qlf844.jpg" alt="Cat with food in the plate" className="themeBottomImg" />
					</Col>
				</Row>
				<Row className="fourthCol">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660373016/theme%20photos/roberto-nickson-To57QlgkoIo-unsplash_qcuwtg.jpg" alt="Dog lying on its bed" className="longThemeImg" />
					</Col>
				</Row>
				<Row className="fifthCol">
					<Col>
						<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/c_scale,h_1166,w_2787/v1660378025/theme%20photos/barbel-kobus-a5P5aCSF--0-unsplash_k4mncd.jpg" alt="Cat lying in the pet house" className="horizontalThemeImg" />
					</Col>
				</Row>		

		</div>
		<div className="themeRowButton">							
			<Button href="/catalog" className="themeButton">Check Catalog</Button>		
		</div>
		
		</div>
	)
}
