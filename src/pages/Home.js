import Theme from './../components/Themes';
import Banner from './../components/Banner'
import { Helmet } from 'react-helmet';

export default function Home() {
	return(
		<div>
			<div>
				<Helmet>
					<title>Puppy Paws</title>
				</Helmet>
			</div>			
			<Banner />		
			<Theme />
		</div>
	)
}