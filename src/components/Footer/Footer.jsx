import { NavLink } from 'react-router-dom';
import { navConfig } from '../../data/navigation.js';
import useResizeWindow from '../../hooks/useResizeWindow.js';

import Container from '../../common/Container/Container';
import ListNav from '../../common/ListNav/ListNav';
import ListSocialNetworks from '../../common/ListSocialNetworks/ListSocialNetworks';



import s from './Footer.module.css';

export default function Footer() {
  const width = useResizeWindow();
  const breakPointTablet = 768;

  if (width < breakPointTablet) {
    return (
      <footer className={s.footer}>
        <Container className={s.footerContainer}>
          <NavLink to="/" className={s.footerNavLogo}>
            Go back to the main page
          </NavLink>

          <p className={s.footerTextCopyright}>
            ©2024.Rhythm Dance Group Dance School. All rights reserved
          </p>
          <ListSocialNetworks className={s.socialList} />
        </Container>
      </footer>
    );
  } else {
    return (
      <footer className={s.footer}>
        <Container className={s.footerContainer}>
          <NavLink to="/" className={s.footerNavLogo}>
            Go back to the main page
          </NavLink>
          <div className={s.footerListBlock}>
            <ListNav items={navConfig} className={s.footerList} />
          </div>
          <div className={s.footerBox}>
            <p className={s.footerTextCopyright}>
              ©2024. Rhythm Dance Group Dance School. All rights reserved
            </p>
            <ListSocialNetworks className={s.socialList} />
          </div>
        </Container>
      </footer>
    );
  }
}
