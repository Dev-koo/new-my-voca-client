type Props = {
	level: string
}

const DisplayLevel = ({ level }: Props) => {
	const getLevel = (level: string) => {
		switch (level) {
			case '어려워요':
				return 'bg-red-500'
			case '애매해요':
				return 'bg-yellow-500'
			case '외웠어요':
				return 'bg-green-500'
			default:
				break
		}
	}

	return (
		<>
			<div className='flex items-center justify-end'>
				<div className='text-sm'>{level}</div>
				<div className={`ml-2 w-3 h-3 ${getLevel(level)} rounded-full`}></div>
			</div>
		</>
	)
}

export default DisplayLevel
