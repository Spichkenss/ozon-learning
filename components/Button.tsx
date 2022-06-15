import Link from 'next/link'
import React, { FC } from 'react'
import { Url } from 'url'
import styles from '../styles/Button.module.css'

export type ButtonType = 'outline' | 'fill'

interface Props {
	children: React.ReactNode
	type: ButtonType
	href?: Url
}

const Button: FC<Props> = ({ children, type, href }) => {
	return (
		<Link href={href || ''}>
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
