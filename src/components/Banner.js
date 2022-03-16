
// import {Row, Col} from 'react-bootstrap';
import React from 'react';
import { Slide } from 'react-slideshow-image';
// import Image from 'react-bootstrap/Image';
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
		<div className="banner">
			<Slide easing="ease">				
				<div className="img-fluid each-slide" >
					<img src={apparel} className="img-wrap banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={nike} className="img-wrap banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={gadgets} className="img-wrap banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={man} className="img-wrap banner" alt="" />
				</div>	
				<div className="img-fluid each-slide" >
					<img src={woman} className="img-wrap banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={gymn} className="img-wrap banner" alt="" />
				</div>
				<div className="img-fluid each-slide" >
					<img src={running} className="img-wrap banner" alt="" />
				</div>	
				<div className="img-fluid each-slide" >
					<img src={cycling} className="img-wrap banner" alt="" />
				</div>	
			</Slide>
		</div>
	)
};

