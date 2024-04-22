import { ChevronDown, Languages, Menu, Search } from 'lucide-react'
import { useShowMean } from '../contexts/ShowMeanContext'

export default function Header() {
	const { handleToggle } = useShowMean()

	return (
		<header className=' grid grid-cols-3 mx-5'>
			<Menu className='icon ' />
			<div className='flex h-12 items-center text-xl hover:cursor-pointer justify-center'>
				<h2>모든그룹</h2>
				<ChevronDown className='' />
			</div>
			<div className='flex justify-end'>
				<Languages className='icon' onClick={handleToggle} />
				<Search className='icon' />
			</div>
		</header>
	)
}
