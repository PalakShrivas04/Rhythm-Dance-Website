import uuid from 'react-uuid';
import { pageAboutUsConfig } from '../../data/infoPageAboutUs';

import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import TextParagraph from '../../common/TextParagraph/TextParagraph';
import ItemsList from '../../common/ItemsList/ItemsList';
import TitleThirdLevel from '../../common/TitleThirdLevel/TitleThirdLevel';
import ButtonArrow from '../../common/ButtonArrow/ButtonArrow';
import SectionAwards from '../../components/SectionAwards/SectionAwards';

import s from './AboutUs.module.css';
import TitleSecondLevel from '../../common/TitleSecondLevel/TitleSecondLevel';

export default function AboutUs() {
  return (
    <>
      <SectionHero className={s.aboutHero} title="About Us" />
      <Section className={s.sectionAboutUs}>
        <Container>
          <TitleSecondLevel
            title="Types of classes"
            className="visuallyHidden"
          />
          <TextParagraph
            className={s.aboutUsText}
            text="Rhythm Dance Group (RDG) is one of the longest established dance schools in the Triangle. Staying true to it's name, RDG has helped it's students find their inner rhythm and enabled them to showcase it on the stage. At RDG, we believe that anybody can dance, which is why we work hard to transform individuals at all levels into groups of the most passionate performers. With the 'freshest' moves and the most extravagant costumes, RDG has given the Triangle, some of it's most iconic, memorable and unique performances over the years, and will continue to do so for many more to come"
          />
          <ul className={s.aboutUsList}>
            {pageAboutUsConfig.map(items => (
              <ItemsList
                item={items}
                key={uuid()}
                className={s.aboutUsListItem}
              >
                <TitleThirdLevel
                  title={items.title}
                  className={s.aboutUsListTitle}
                />
                <TextParagraph
                  className={s.aboutUsListText}
                  text={items.text}
                />
                <ButtonArrow
                  to={items.url}
                  message="Start now"
                  className={s.aboutUsListBtn}
                />
              </ItemsList>
            ))}
          </ul>
        </Container>
      </Section>
      <SectionAwards />
    </>
  );
}
