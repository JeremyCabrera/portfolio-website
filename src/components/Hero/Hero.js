import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        FullStackGuerilla.com!
      </SectionTitle>
      <SectionText>
        My name is Jeremy and I am the Owner/Developer of fullstackguerilla.com and 
        below you will find other FullStack JavaScript Applications I have built, deployed and currently manage as well as a little bit about me! &nbsp;If you're looking for a Full-Stack Engineer for any of your project needs, please reach out!
      </SectionText>
      <Button onClick={() => window.location = "https://linkedin.com/in/jeremy-cabrera-4044a8179/"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;