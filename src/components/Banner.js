
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import apparel from './banner/apparel.png';
import nike from './banner/nike_shoes.jpg';
import woman from './banner/apparel_woman1.png';
import gadgets from './banner/gadgets1.png';
import man from './banner/men_apparel.png';
import gymn from './banner/gymn.png';
import cycling from './banner/cycling.png';
import running from './banner/nike_running_shoes.jpg';


export default function Banner () {
	return (
		<div className="slick-arrow">
			<Slide easing="ease">				
				<div className="img-fluid each-slide" >
					<img src={apparel} className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={nike} className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={gadgets} className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={man} className="banner" alt="" />
				</div>	
				<div className="img-fluid each-slide" >
					<img src={woman} className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={gymn} className="banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={running} className="banner" alt="" />
				</div>	
				<div className="img-fluid each-slide" >
					<img src={cycling} className="banner" alt="" />
				</div>	
			</Slide>
		</div>
	)
};

