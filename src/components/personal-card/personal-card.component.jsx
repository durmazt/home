import React from 'react'
import styled from 'styled-components'
import {
	SectionTitle,
	Quote,
	ItalicText,
	BoldText,
	PersonalList,
	Item
} from './../section-card/section-card.styles'
import CustomIcon from './../custom-icon/custom-icon.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'
import SpotifyLogo from './../../images/social/spotify.png'



const PersonalCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='nature' emoji='🌄' /> Personal</SectionTitle>
			<Quote>
				"what is rare in man is the union of his own originality with the power of his life. most men are copies, which is a good thing, or are imitations, which is bad. the thoughts and opinions of others are their lives. their desires are quotations." <ItalicText style={{ fontSize: '18px', color: '#888' }}>– R. Waldo EMERSON.</ItalicText>
			</Quote>
			<PersonalList>
				<Item><BoldText>Personality type:</BoldText> <CustomLink targetUrl='https://www.16personalities.com/enfp-personality'>ENFP-T</CustomLink></Item>
				{/* <Item><BoldText>Collections:</BoldText> postcard, flag patch and paper money from visited countries</Item> */}
				<Item>
					<BoldText>Music:</BoldText>// me on
          <CustomIcon
						targetUrl='https://open.spotify.com/user/3w4jqwmjhkqc1mlv9ofd7r8nr?si=c292a893eb8f40de'
						imageSource={SpotifyLogo}
						altDescription='spotify'
						style={{ width: '27px', verticalAlign: 'middle', marginLeft: '5px' }}
					/>
				</Item>
				{/* <Item><BoldText>Movies:</BoldText> <BlogLink to='/movies'>the ones</BlogLink> that made me feel somehow different than others</Item> */}
			</PersonalList>
		</>
	)
}

export default PersonalCard