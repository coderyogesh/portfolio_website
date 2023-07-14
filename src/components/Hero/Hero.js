import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br /> Yogesh Here !
      </SectionTitle>
      <SectionText>
        Full Stack Developer
      </SectionText>
      <Button  onClick={() => window.location = ' https://drive.google.com/file/d/11UKfY4kobxdryiyFznz_kOvk47hcAa_Z/view?usp=drive_link'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;