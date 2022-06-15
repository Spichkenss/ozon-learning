import { NextPage } from 'next'
import React from 'react'
import CourseItem, { ICourse } from '../components/CourseItem'
import CourseNav from '../components/CourseNav'
import styles from '../styles/Courses.module.css'

const courses: ICourse[] = [
	{
		id: 1,
		description:
			'NestJS - серверный JavaScript фреймворк (NodeJS) над Express.В видео покажу создание полного REST API c базой данных MongoDB',
		preview: '/../public/nest.jpg',
		title: ' NestJs',
		videoId: 'abdgy72csaA',
	},
	{
		id: 2,
		description:
			'React Полный курс от А до Я. Рассмотрим основные концепции и разработаем функционал, который встречается в каждом приложении.',
		preview: '/../public/react.png',
		title: 'React JS фундаментальный курс от А до Я',
		videoId: 'GNrdg3PzpJQ',
	},
	{
		id: 3,
		description:
			'NestJS - серверный JavaScript фреймворк (NodeJS) над Express.В видео покажу создание полного REST API c базой данных MongoDB',
		preview: '/../public/nest.jpg',
		title: ' NestJs',
		videoId: 'abdgy72csaA',
	},
	{
		id: 4,
		description:
			'React Полный курс от А до Я. Рассмотрим основные концепции и разработаем функционал, который встречается в каждом приложении.',
		preview: '/../public/react.png',
		title: 'React JS фундаментальный курс от А до Я',
		videoId: 'GNrdg3PzpJQ',
	},
	{
		id: 5,
		description:
			'NestJS - серверный JavaScript фреймворк (NodeJS) над Express.В видео покажу создание полного REST API c базой данных MongoDB',
		preview: '/../public/nest.jpg',
		title: ' NestJs',
		videoId: 'abdgy72csaA',
	},
	{
		id: 6,
		description:
			'React Полный курс от А до Я. Рассмотрим основные концепции и разработаем функционал, который встречается в каждом приложении.',
		preview: '/../public/react.png',
		title: 'React JS фундаментальный курс от А до Я',
		videoId: 'GNrdg3PzpJQ',
	},
]

const Courses: NextPage = () => {
	return (
		<div className={styles.container}>
			<CourseNav />
			<div className={styles.content}>
				<h1 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
					Список всех курсов
				</h1>
				<div className={styles.courses}>
					{courses.map(course => (
						<CourseItem key={course.id} course={course} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Courses
