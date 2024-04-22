import { GraduationCap, Shapes } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='flex'>
			<Link
				className='grow flex h-12 justify-center items-center hover:bg-neutral-900'
				to='/'>
				<Shapes />
			</Link>
			<Link
				className='grow flex h-12 justify-center items-center hover:bg-neutral-900'
				to='/learn'>
				<GraduationCap />
			</Link>
		</div>
	);
}
