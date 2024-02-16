import ContainerEllipse from '../ContainerEllipse/ContainerEllipse';
import s from './ContainerEllipseAdress.module.css';

export default function ContainerEllipseAdress({ className }) {
  return (
    <ContainerEllipse
      className={`${s.containerMap} ${className}`}
      title="Address"
    >
      <address className={s.mapAddress}>
        <a
          href="tell:+1 (626) 839-8484"
          className={`${s.mapTextTell} ${s.mapText}`}
        >
          +1 (919) 637-4140
        </a>
        <a
          href="mailto:leadandfollowds@gmail.com"
          className={`${s.mapTextMail} ${s.mapText}`}
        >
          Rhythmdancegrp@gmail.com
        </a>
        <p className={`${s.mapTextAddress} ${s.mapText}`}>
        27560 HSNC Cultural Hall
309 Aviation Parkway , Morrisville North Carolina
        </p>
      </address>
    </ContainerEllipse>
  );
}
