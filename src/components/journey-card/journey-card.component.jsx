import React, { useState } from 'react'
import styled from 'styled-components'
import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date,
	BoldText
} from './../section-card/section-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from '../custom-link/custom-link.component'
import TemettuImg from '../../images/temettu.jpg'
import useStyles from './journey-card.styles'

const SeeMoreLink = styled.div`
	text-decoration: underline;
	cursor: pointer;
	&:hover {
    color: #555;
  	outline-width: 0;
  }
`

const JourneyCard = () => {
	const classes = useStyles()

	const [loadedMore, setLoadedMore] = useState(false)

	return (
		<>
			<SectionTitle><CustomEmoji label='computer' emoji='💻' /> The Journey</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				{/* <Item>
					<span className={classes.presentText}>Running a little design and software studio called <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink> since June of 2020.</span>
					<div className={classes.productsTitle}>
						Products
					</div>
					<div className={classes.currentProjects}>
						<div>
							<span className={classes.presentEmoji}><CustomEmoji label='investment' emoji='💸' /></span> <CustomLink targetUrl='https://temettu.app'>Temettü</CustomLink>, a mobile app that helps you to follow the dividend calendar and track the dividend payments of your stock investments. <Date>(2020)</Date>
						</div>
						<CustomLink targetUrl='https://temettu.app'>
							<img
								className={classes.itemImage}
								src={TemettuImg}
								alt='temettu'
							/>
						</CustomLink>
					</div>
				</Item> */}
				<Item>
					<span className={classes.presentText}>
						Working on freelance software projects. <a style={{ textDecoration: "underline" }} href="mailto:durmaztekeli@gmail.com?subject=Freelance">Hire me</a>
					</span>
				</Item>
				{/* <Item>
					<span className={classes.presentText}>Investing in stocks.</span>
				</Item> */}
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='motobike' emoji='' /> Software Engineer at <CustomLink targetUrl='https://Tokmak.com.tr/'>Tokmak Teknoloji</CustomLink>. <Date>(Dec 2019 – Jun 2020)</Date>
				</Item>
				<Item>
					<CustomEmoji label='joystick' emoji='👁️' /> Computer Vision Engineer at <CustomLink targetUrl='https://visiomex.com/'>Visiomex</CustomLink>. <Date>(Dec 2019 – Jun 2020)</Date>
				</Item>
				<Item>
					<CustomEmoji label='train' emoji='🚞' /> Took a gap year after graduation before starting my professional career.
				</Item>
				{!loadedMore && <SeeMoreLink onClick={() => setLoadedMore(true)}>load more</SeeMoreLink>}
				{loadedMore && (
					<>
						<Item>
							<CustomEmoji label='graduation' emoji='🎓' /> Graduated from <BoldText>Selcuk University</BoldText> with a degree in Computer Engineering. <Date>(2023)</Date>
						</Item>
						<Item>
							<CustomEmoji label='newborn' emoji='🐣' /> My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.
						</Item>
					</>
				)}
			</ItemList>
		</>
	)
}

export default JourneyCard
