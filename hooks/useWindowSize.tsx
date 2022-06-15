import { useEffect, useState } from 'react'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<{
		width: number | undefined
		height: number | undefined
		visible: boolean
	}>({
		width: undefined,
		height: undefined,
		visible: false,
	})
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				visible: window.innerWidth > 720 ? false : true,
			})
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowSize
}

export default useWindowSize
