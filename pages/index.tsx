import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Lottie from 'react-lottie'
import * as rocket from '../public/rocket.json'
import Button from '../components/Button'
import Input from '../components/Input'
import useWindowSize from '../hooks/useWindowSize'
import Card from '../components/Card'
import Counter from '../components/Counter'

const Home: NextPage = () => {
	const { width } = useWindowSize()
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.content}>
				<div className={styles.welcome}>
					{/* Left */}
					<div>
						<h1 className={styles.title}>
							Информационная
							<br />
							система
						</h1>
						<div className={styles.buttons}>
							<Button type='outline' href={'/courses'}>
								Программирование
							</Button>
							<Button type='outline' href={'/courses'}>
								Маркетинг
							</Button>
							<Button type='outline' href={'/courses'}>
								Дизайн
							</Button>
							<Button type='outline' href={'/courses'}>
								Игры
							</Button>
						</div>
						<p className={styles.description}>
							<span style={{ color: '#015aff' }}>Актуальные</span> знания от
							признанных экспертов рынка для{' '}
							<span style={{ color: '#f91156' }}>новичков</span> и практикующих
							специалистов.
						</p>
						<div className={styles.counters}>
							<Counter title='Курсов' counter={700} />
							<Counter title='Кураторов' counter={150} />
							<Counter title='Пользователей' counter={244000} />
						</div>
						<Input placeholder={'Введите Email'}>
							<Button type='fill' href='/registration'>
								Начать
							</Button>
						</Input>
					</div>
					{/* Left */}
					{/* Right */}
					{width! > 720 && (
						<div className={styles.animateImage}>
							<Lottie
								options={{ loop: true, autoplay: true, animationData: rocket }}
							/>
						</div>
					)}
					{/* Right */}
				</div>
				<div className={styles.info}>
					<p className={styles.about}>
						На платформе можнополучить знания по актуальным темам и
						востребованные навыки. Все курсы нацелены на практику: мы следим за
						актуальностью материала и помогаем с трудоустройством и стажировкой.
					</p>
					<div className={styles.cards}>
						<Card
							image='/../public/prof.png'
							title='Профессии'
							text='Помогают полностью освоить профессию с нуля, собрать портфолио, подготовить резюме и найти работу.'
						/>
						<Card
							image='/../public/courses.png'
							title='Курсы'
							text='Позволяют получить конкретный навык или изучить инструмент.'
						/>
						<Card
							image='/../public/education.png'
							title='Высшее образование'
							text='Бакалавриат и магистратура совместно с ведущими вузами России. Диплом государственного образца.'
						/>
						<Card
							image='/../public/leaders.png'
							title='Лидеры изменений'
							text='Программа развития профессиональных компетенций и лидерских качеств от Ozon learning и ВШМ СПбГУ.'
						/>
					</div>
					<h1 style={{ textAlign: 'center' }}>Отзывы об Ozon Learning</h1>
					<div className={styles.cards}>
						<Card
							rounded
							image='/../public/avatar1.png'
							title='Александр'
							text='Очень интересно было посмотреть на такое интервью-обучение.'
						/>
						<Card
							rounded
							image='/../public/avatar2.png'
							title='Ярослав'
							text='В целом преподаватель позитивный, не пассует перед трудностями.Но ему всё же следует готовиться к семинарам, и заранее смотреть презентацию(продумывать ход занятия и возможные вопросы), а также выкладывать её для студентов на платформе.Не хватало условия задач перед глазами, при их решении на семинаре.Интересная и необычная фича - это правила клуба)'
						/>
						<Card
							rounded
							image='/../public/avatar3.png'
							title='Дмитрий'
							text='Курс понравился, информация была понятна и в доступной форме. Спасибо большое за курс. И огромное спасибо'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
