import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import BurgerIcon from '../icons/BurgerIcon'
import styles from '../styles/Navbar.module.css'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'

const variants = {
	initial: { x: 100 },
	animate: { x: 0 },
}

const Navbar: FC = () => {
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
				<BurgerIcon toggleMenu={() => toggleMenu(isOpen)} />
			</div>
			<div className={styles.container}>
				<div>
					<Link href={'/'}>
						<a className={styles.logo}>OZON LEARNING</a>
					</Link>
				</div>
				{visible ? (
					isOpen && (
						<motion.div
							initial={'initial'}
							animate={'animate'}
							variants={variants}
							className={styles.links}
						>
							<Link href='/courses'>
								<a className={styles.link}>Курсы</a>
							</Link>
							<Link href='/about'>
								<a className={styles.link}>Об Ozon Learning</a>
							</Link>
							<Link href='/companies'>
								<a className={styles.link}>Компаниям</a>
							</Link>
						</motion.div>
					)
				) : (
					<div className={styles.links}>
						<Link href='/courses'>
							<a className={styles.link}>Курсы</a>
						</Link>
						<Link href='/about'>
							<a className={styles.link}>Об Ozon Learning</a>
						</Link>
						<Link href='/companies'>
							<a className={styles.link}>Компаниям</a>
						</Link>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
