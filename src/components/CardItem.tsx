import { Volume2 } from 'lucide-react'
import { CardType } from '../types'
import DisplayLevel from './DisplayLevel'
import { useEffect, useState } from 'react'
type Props = {
	card: CardType
	showMean: boolean
}

const CardItem = ({ card, showMean: showMeanFromParent }: Props) => {
	const [showMean, setShowMean] = useState(false)

	useEffect(() => {
		setShowMean(showMeanFromParent)
	}, [showMeanFromParent])

	const handleClick = () => {
		setShowMean(!showMean)
	}

	return (
		<div className='bg-neutral-900 p-5 mb-5 rounded-2xl' onClick={handleClick}>
			<div className='flex justify-between text-sm text-neutral-500'>
				{card.group_name}
				<Volume2 size={30} />
			</div>
			<div className='text-3xl'>{card.word}</div>
			{showMean && <div className='text-2xl'>{card.mean}</div>}
			<DisplayLevel level={card.level} />
		</div>
	)
}

export default CardItem
