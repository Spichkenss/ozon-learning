import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Course: NextPage = () => {
	const { query } = useRouter()
	return <div>{query.id}</div>
}

export default Course
