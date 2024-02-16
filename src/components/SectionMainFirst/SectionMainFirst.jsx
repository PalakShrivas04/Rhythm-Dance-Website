import SectionHero from '../../common/SectionHero/SectionHero';
import ContainerEllipse from '../../common/ContainerEllipse/ContainerEllipse';
import Button from '../../common/Button/Button';

import s from './SectionMainFirst.module.css';

const booking = () => {
  window.location.href = 'https://square.link/u/ipYMb3Km';
}
export default function SectionMainFirst() {
  return (
    <SectionHero className={s.sectionHero} title="Main page">
      <ContainerEllipse className={s.heroBox} title="NexStar Dance Competition ">
        <p className={s.heroText}>
        Tickets Available Here
        </p>
        <Button message="Book Now" onClick={booking} className={s.heroBtn} />
      </ContainerEllipse>
    </SectionHero>
  );
}
