import uuid from 'react-uuid';
import { aboutUsConfig } from '../../data/infoSectionAboutUs';

import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';

import s from './SectionAboutUs.module.css';
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

export default function SectionAboutUs() {
  return (
    <Section className={s.sectionAbout}>
      <Container>
        <TitleSecondLevel title="About Us" className={s.aboutTitle} />
        <div className={s.aboutWrapper}>
          <TextParagraph
            className={s.aboutText}
            text="Rhythm Dance Group (RDG) is one of the longest established dance schools in the Triangle. Staying true to it's name, RDG has helped it's students find their inner rhythm and enabled them to showcase it on the stage. At RDG, we believe that anybody can dance, which is why we work hard to transform individuals at all levels into groups of the most passionate performers. With the 'freshest' moves and the most extravagant costumes, RDG has given the Triangle, some of it's most iconic, memorable and unique performances over the years, and will continue to do so for many more to come."
          />
          <ul className={s.aboutList}>
            {aboutUsConfig.map(items => (
              <ItemsList item={items} key={uuid()}>
                <p>{items.text}</p>
              </ItemsList>
            ))}
          </ul>
          <ButtonArrow
            className={s.aboutBtn}
            to="/about"
            message="Learn more"
          />
        </div>
      </Container>
      <BackgroundImg className={s.BackgroundImg} />
    </Section>
  );
}
