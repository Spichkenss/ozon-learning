import React, { FC } from 'react'
import styles from '../styles/Input.module.css'

interface Props {
	children?: React.ReactNode
	placeholder: string
}

const Input: FC<Props> = ({ children, placeholder }) => {
	return (
		<div className={styles.container}>
			<input placeholder={placeholder} className={styles.input} />
			<div className={styles.button}>{children}</div>
		</div>
	)
}

export default Input
