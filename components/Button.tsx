import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../styles/Button.module.css'

export type ButtonType = 'outline' | 'fill'

interface Props {
	children: React.ReactNode
	type: ButtonType
	href: string
}

const Button: FC<Props> = ({ children, type, href }) => {
	return (
		<Link href={href}>
			<a
				className={[
					styles.button,
					type === 'outline' ? styles.outline : styles.fill,
				].join(' ')}
			>
				{children}
			</a>
		</Link>
	)
}

export default Button
