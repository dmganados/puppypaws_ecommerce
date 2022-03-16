
// import {Row, Col} from 'react-bootstrap';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
import 'react-slideshow-image/dist/styles.css';
import apparel from './banner/apparel.png';
import nike from './banner/nike_shoes.jpg';


export default function Banner () {
	return (
		<div>
			<Slide easing="ease">
				<div className="each-slide img-fluid">
					<div style={{'backgroundImage': `url(${apparel})`}}>
						
					</div>
				</div>
				<div className="each-slide img-fluid">
					<div style={{'backgroundImage': `url(${nike})`}}>
						
					</div>
				</div>
			</Slide>
		</div>
	)
};

