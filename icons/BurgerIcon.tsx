import * as React from 'react'

interface Props {
	toggleMenu: () => void
}

const BurgerIcon: React.FC<Props> = ({ toggleMenu }, { props }: any) => {
	return (
		<div onClick={toggleMenu}>
			<svg
				stroke='#015aff'
				fill='#015aff'
				strokeWidth={0}
				viewBox='0 0 512 512'
				height='2em'
				width='2em'
				{...props}
			>
				<path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z' />
			</svg>
		</div>
	)
}

export default BurgerIcon
