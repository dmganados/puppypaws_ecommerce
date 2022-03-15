
// import {Row, Col} from 'react-bootstrap';
// import { Slide } from 'react-slideshow-image';
import apparel from './banner/apparel.png';
import nike from './banner/nike_shoes.jpg';


export default function Banner() {	

	return (
		<div>				
			<img src={apparel} className="banner" alt="Apparel" />
			<img src={nike} className="banner" alt="Nike Shoes" />
		</div>
	)	
};