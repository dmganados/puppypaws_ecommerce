
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Banner () {
	return (
		<div className="slick-arrow">
			<Slide easing="ease">				
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315650/theme%20photos/nick-mundackal-pW7q0W5qBSU-unsplash_fa4d0z.jpg" className="banner" alt="" />		
				</div>
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315653/theme%20photos/tamara-bellis-P-Sc9mlWCOw-unsplash_wmwqyl.jpg" className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660315049/theme%20photos/299_j7pvxk.jpg" className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316582/theme%20photos/close-up-bowl-with-pet-accessories-still-life_qp4t1m.jpg" className="banner" alt="" />
				</div>	
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316583/theme%20photos/horse-2858776_cpdsci.jpg" className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660316582/theme%20photos/pet-accessories-still-life-concept-with-pet-dry-food_n2ezfw.jpg" className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >					
					<img src="https://res.cloudinary.com/dc7ygfgw5/image/upload/v1660314780/theme%20photos/close-up-portrait-pleased-girl-with-short-brown-hair-embracing-funny-beagle-dog-with-eyes-closed_ittxei.jpg" className="banner" alt="" />
				</div>					
			</Slide>
		</div>
	)
};

