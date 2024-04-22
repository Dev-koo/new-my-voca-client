import React from 'react'

type Props = {
	children: React.ReactNode
}

const Main = ({ children }: Props) => {
	return <div className='text-2xl  h-[571px]'>{children}</div>
}

export default Main
