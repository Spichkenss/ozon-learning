import { NextPage } from 'next'
import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import styles from '../styles/Companies.module.css'

const Companies: NextPage = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.content}>
				<h1 className={styles.title}>Корпоративное обучение для бизнеса</h1>
				<p className={styles.text}>
					Подбираем и разрабатываем образовательные программы с учетом специфики
					ниши, целе и задач компании.
				</p>
				<Button href='/courses' type='fill'>
					Заказать обучение
				</Button>
			</div>
		</div>
	)
}

export default Companies
