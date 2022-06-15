import Image from 'next/image'
import React, { FC } from 'react'
import styles from '../styles/CourseItem.module.css'

const cutString = (string: string): string => {
	const short = string.substring(0, 23)
	if (string.length >= 21) return `${short}...`
	return short
}

export interface ICourse {
	id: number
	title: string
	videoId: string
	description: string
	preview: string
}

interface Props {
	course: ICourse
}

const CourseItem: FC<Props> = ({ course }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{cutString(course.title)}</h1>
			<div className={styles.image}>
				<Image
					src={course.preview}
					alt={'Preview'}
					layout='responsive'
					width={1280}
					height={720}
				/>
			</div>
			<p className={styles.description}>{course.description}</p>
		</div>
	)
}

export default CourseItem
