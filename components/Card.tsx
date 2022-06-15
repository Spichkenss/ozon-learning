import Image from 'next/image'
import React, { FC } from 'react'
import styles from '../styles/Card.module.css'

interface Props {
	image: string
	title: string
	text: string
	rounded?: boolean
}

const Card: FC<Props> = ({ image, text, title, rounded }) => {
	return (
		<div className={styles.container}>
			<div style={{ borderRadius: rounded ? 50 : 0, overflow: 'hidden' }}>
				<Image
					src={image}
					alt={'Изображение'}
					width={100}
					height={100}
					layout='fixed'
				/>
			</div>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Card
