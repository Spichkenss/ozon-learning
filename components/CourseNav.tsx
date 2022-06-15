import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import BurgerIcon from '../icons/BurgerIcon'
import styles from '../styles/CourseNav.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Url } from 'url'

const variants = {
	initial: { x: 300 },
	animate: { x: 0 },
}

const CourseNav = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { visible } = useWindowSize()

	const toggleMenu = (prevState: boolean) => {
		setIsOpen(!prevState)
	}

	useEffect(() => {
		if (visible) {
			setIsOpen(false)
		}
	}, [visible])

	return (
		<nav className={styles.navbar}>
			<div className={styles.burger}>
				<BurgerIcon color={'white'} toggleMenu={() => toggleMenu(isOpen)} />
			</div>
			<div className={styles.container}>
				<div>
					<Link href={'/'}>
						<a className={styles.logo}>OZON LEARNING</a>
					</Link>
				</div>
				<AnimatePresence>
					{visible ? (
						isOpen && (
							<motion.div
								initial={'initial'}
								animate={'animate'}
								exit={'initial'}
								variants={variants}
								transition={{ type: 'tween' }}
								className={styles.links}
							>
								<Link href='/courses'>
									<a className={styles.link}>Все курсы</a>
								</Link>
								<Link href='/courses/study'>
									<a className={styles.link}>Обучение</a>
								</Link>
								<Link href='/settings'>
									<a className={styles.link}>Настройки</a>
								</Link>
							</motion.div>
						)
					) : (
						<div className={styles.links}>
							<Link href='/courses'>
								<a className={styles.link}>Все курсы</a>
							</Link>
							<Link href='/courses/study'>
								<a className={styles.link}>Обучение</a>
							</Link>
							<Link href='/settings'>
								<a className={styles.link}>Настройки</a>
							</Link>
						</div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	)
}

export default CourseNav
