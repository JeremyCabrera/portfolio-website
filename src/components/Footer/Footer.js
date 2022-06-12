import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:804-519-0984">804-519-0984</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jeremy@fullstackguerilla.com">jeremy@fullstackguerilla.com</LinkItem>
        </LinkColumn>
        <br />
        <LinkColumn>
          <LinkTitle>Company</LinkTitle>
          <LinkItem href="">FullStack Guerilla LLC</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Address</LinkTitle>
          <LinkItem href="">Midlothian, VA 23112</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Do not let what you cannot do interfere with what you can do.” -John Wooden</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/JeremyCabrera'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/jeremy-cabrera-4044a8179/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://instagram.com/fullstack_guerilla/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
