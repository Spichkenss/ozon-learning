import * as React from 'react'

interface Props {
	toggleMenu: () => void
	color: string
}

const BurgerIcon: React.FC<Props> = ({ toggleMenu, color }) => {
	return (
		<div onClick={toggleMenu}>
			<svg
				stroke={color}
				fill={color}
				strokeWidth={0}
				viewBox='0 0 512 512'
				height='2em'
				width='2em'
			>
				<path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z' />
			</svg>
		</div>
	)
}

export default BurgerIcon
