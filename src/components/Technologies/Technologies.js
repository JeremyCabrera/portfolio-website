import React from 'react';
import { DiCodepen, DiFirebase, DiGithubBadge, DiHtml5, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Below are a few of the technologies I am familiar with as well as others! 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodepen size="3rem"/>
        <ListContainer>
          <ListTitle>Codepen</ListTitle>
          <ListParagraph>
            Experience with <br />
            Codepen.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
          <ListTitle>Html5</ListTitle>
          <ListParagraph>
            Experience with <br />
            Html5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiGithubBadge size="3rem"/>
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
          <ListParagraph>
            Experience with <br />
            Push and Pull Requests.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
