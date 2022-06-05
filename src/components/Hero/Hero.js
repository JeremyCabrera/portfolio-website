import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Jeremy, a FullStack<br />
        JavaScript Developer!
      </SectionTitle>
      <SectionText>
        Below you will find a few FullStack JavaScript Applications I have built, deployed and currently manage. &nbsp;If you're looking for a Full-Stack Engineer for any of your project needs, please reach out!
      </SectionText>
      <Button onClick={() => window.location = "https://linkedin.com/in/jeremy-cabrera-4044a8179/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;