import { PropsWithChildren, createContext, useContext } from 'react'
import useToggle from '../hooks/useToggle'

type ContextType = {
	showMean: boolean
	handleToggle: () => void
}

const ShowMeanContext = createContext<ContextType | null>(null)

export const ShowMeanProvider = ({ children }: PropsWithChildren) => {
	const [showMean, handleToggle] = useToggle(false)

	return (
		<ShowMeanContext.Provider value={{ showMean, handleToggle }}>
			{children}
		</ShowMeanContext.Provider>
	)
}

export const useShowMean = () => useContext(ShowMeanContext) as ContextType
