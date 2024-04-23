import AppLayout from '../layouts/AppLayout'
import Navbar from '../components/Navbar'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Learn = () => {
	return (
		<AppLayout>
			<header className='flex justify-center items-center h-[44px] p-1.5'>
				<h2 className='text-xl '>학습</h2>
			</header>
			<div className='text-2xl h-full'>
				<ul className='p-5'>
					<Link to='./multiple-choice'>
						<li className='flex items-center justify-between hover:cursor-pointer py-5 hover:bg-neutral-900'>
							사지선다
							<ChevronRight />
						</li>
					</Link>
				</ul>
			</div>
			<Navbar />
		</AppLayout>
	)
}

export default Learn
