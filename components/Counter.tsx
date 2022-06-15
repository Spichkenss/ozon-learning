import React, { FC } from 'react'
import styles from '../styles/Counter.module.css'

interface Props {
	title: string
	counter: number
}

const Counter: FC<Props> = ({ counter, title }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.counter}>{counter}</h1>
			<p className={styles.title}>{title}</p>
		</div>
	)
}

export default Counter
