import SectionHero from '../../common/SectionHero/SectionHero';
import Section from '../../common/Section/Section';
import Container from '../../common/Container/Container';
import ImgPrices1 from '../../images/Prices/cary festival.webp';
import ImgPrices2 from '../../images/Prices/india festival.webp';

import s from './Prices.module.css';

const redirectToGoogleDrive1 = () => {
  
  window.location.href = 'https://photos.app.goo.gl/YQGEgA7uxcPDyE1R6';
};
const redirectToGoogleDrive2 = () => {
  
  window.location.href = 'https://photos.app.goo.gl/5fcktsZYbdp6DpeC9';
};

export default function Prices() {
  return (
    <>
      <SectionHero className={s.pricesHero} title="Photos and Videos" />
      <Section>
        <Container>
          <div className={s.pricesBox}>
            <img src={ImgPrices1} alt="" className={s.pricesBoxImg} onClick={redirectToGoogleDrive1}/>
            <button type="text" className="btn"
            onClick={redirectToGoogleDrive1}>
             HumSub Diwali
              
            </button>
          </div>
          <div className={s.pricesBox}>
            <img src={ImgPrices2} alt="" className={s.pricesBoxImg} onClick={redirectToGoogleDrive2} />
            <button type="text" className="btn"
           onClick={redirectToGoogleDrive2}>
              India Fest
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}
