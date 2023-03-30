import React from 'react'

import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                © {new Date().getFullYear() + " "}
                Durmaz Tekeli
                <br /><a href="mailto:durmaztekeli@gmail.com">durmaztekeli[at]gmail.com</a> <CustomEmoji label='mailbox' emoji='📮' />
            </FooterDiv>
        </>
    )
}

export default Footer
