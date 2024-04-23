import { CardType } from '../types'
import CardItem from './CardItem'
import { useShowMean } from '../contexts/ShowMeanContext'

type Props = {
	cards: CardType[]
}

const CardList = ({ cards }: Props) => {
	const { showMean } = useShowMean()

	return (
		<>
			{/* <h1 onClick={handleToggle}>
				<Languages />
			</h1> */}
			<ul className='flex flex-col h-full overflow-scroll p-5 last:pb-40'>
				{cards.map((card) => (
					<CardItem key={card.id} card={card} showMean={showMean} />
				))}
			</ul>
		</>
	)
}

export default CardList
