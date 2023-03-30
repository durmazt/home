import React from 'react'

import {
	Title,
	Snippet,
	Description,
	SocialIcons,
	MainContainer,
	ImageContainer
} from './snippet-card.styles'

import CustomIcon from './../custom-icon/custom-icon.component'
import CustomLink from './../custom-link/custom-link.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'

import LinkedinLogo from './../../images/social/linkedin.png'
import GithubLogo from './../../images/social/github.png'
import MediumLogo from './../../images/social/medium.png'
import TwitterLogo from './../../images/social/twitter.png'
import PP from './../../images/proofby.jpg'
import Pimage from './pimage'

const SnippetCard = () => {
	return (
		<MainContainer>
			<div>
				<Title>Merhaba, I'm Durmaz.</Title>
				{/* <Snippet>Founder at <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink>, backpacker and lover of nature <CustomEmoji label='leaf' emoji='🍃' /></Snippet> */}
				<Description>
				I've always been deeply intrigued by the complete software development cycle, from the inception of an idea to the journey of transforming it into reality. As a result, I take great pleasure in dedicating my time to enhancing my expertise in full-stack development, with a specific emphasis on backend programming.
			</Description>
				<SocialIcons>
					<CustomIcon
						targetUrl='https://www.linkedin.com/in/durmazt/'
						imageSource={LinkedinLogo}
						altDescription='linkedin' />
					<CustomIcon
						targetUrl='https://www.github.com/durmazt'
						imageSource={GithubLogo}
						altDescription='github' />
					<CustomIcon
						targetUrl='https://www.medium.com/@durmaztekeli'
						imageSource={MediumLogo}
						altDescription='medium' />
					<CustomIcon
						targetUrl='https://twitter.com/tekelidurmaz'
						imageSource={TwitterLogo}
						altDescription='twitter' />
				</SocialIcons>
			</div>
			  <ImageContainer>
				<Pimage></Pimage>
			</ImageContainer>  
			{/* <ImageContainer>
			<Pimage/>
			</ImageContainer> */}
			

		</MainContainer>
	)
}

export default SnippetCard