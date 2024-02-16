import Section from '../../common/Section/Section';

import BackgroundImg from '../../common/BackgroundImg/BackgroundImg';

import s from './SectionDanceStyles.module.css';

export default function SectionDanceStyles() {
  return (
    <Section className={s.sectionDanceSt}>
      <BackgroundImg className={s.imgEllipse} />
    </Section>
  );
}
