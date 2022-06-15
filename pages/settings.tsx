import { NextPage } from 'next'
import React from 'react'
import Button from '../components/Button'
import CourseNav from '../components/CourseNav'
import Input from '../components/Input'
import styles from '../styles/Settings.module.css'

const Settings: NextPage = () => {
	return (
		<div className={styles.container}>
			<CourseNav />
			<div className={styles.form}>
				<h1 className={styles.title}>Сменить имя пользователя</h1>
				<Input placeholder='Имя' />
				<Button type='fill'>Изменить </Button>
			</div>
		</div>
	)
}

export default Settings
