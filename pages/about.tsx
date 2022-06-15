import { NextPage } from 'next'
import React from 'react'
import Counter from '../components/Counter'
import Navbar from '../components/Navbar'
import styles from '../styles/About.module.css'

const About: NextPage = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.content}>
				<h1 className={styles.title}>
					Миссия OZON LEARNING — дать возможность каждому быть актуальным и
					востребованным специалистом прямо сейчас. Вне зависимости от возраста
					и географии.
				</h1>
				<div className={styles.counters}>
					<Counter title='Курсов' counter={700} />
					<Counter title='Кураторов' counter={150} />
					<Counter title='Пользователей' counter={244000} />
				</div>
			</div>
		</div>
	)
}

export default About
