import { NavbarDropdown, NavbarItem } from './components/navbar-dropdown';
import { assemblyMount, gallery, manufacturers, ourAchievements, personnel } from '@/routes/pages/public/about-us';
import { certification, serviceRepairs, usefulDocuments } from '@/routes/pages/public/services';
import { parts, tankers } from '@/routes/pages/public/products';

import { Colors } from '@/common/colors';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Hamburger } from './components/hamburger';
import { Link } from 'react-router-dom';
import { careers } from '@/routes/pages/public/careers';
import classNames from 'classnames';
import i18n from '@/internalization/i18n';
import { joinUs } from '@/routes/pages/public/join-us';
import styled from 'styled-components';
import { useResize } from '@/hooks/useResize';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const NavigationBar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [t] = useTranslation();

  useResize(() => setMenuExpanded(false));

  const aboutUs: NavbarItem[] = [
    {
      name: t('realizations'),
      key: ourAchievements.key,
    },
    {
      name: t('current-employees'),
      key: personnel.key,
    },
    {
      name: t('assemble-mount'),
      key: assemblyMount.key,
    },
    {
      name: t('manufacturers'),
      key: manufacturers.key,
    },
    {
      name: t('gallery'),
      key: gallery.key,
    },
  ];

  const products: NavbarItem[] = [
    {
      name: t('tankers'),
      key: tankers.key,
    },
    {
      name: t('parts'),
      key: parts.key,
    },
  ];

  const services: NavbarItem[] = [
    {
      name: t('services-reparations'),
      key: serviceRepairs.key,
    },
    {
      name: t('certification'),
      key: certification.key,
    },
    {
      name: t('useful-documents'),
      key: usefulDocuments.key,
    },
  ];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledNav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <Hamburger onClick={() => setMenuExpanded(!menuExpanded)} />

        <div id="navigation-bar" className={classNames('navbar-menu', { 'is-active': menuExpanded })}>
          <div className="navbar-end">
            <NavbarDropdown name={t('about-us')} navbarItems={aboutUs} />
            <NavbarDropdown name={t('products')} navbarItems={products} />
            <NavbarDropdown name={t('services')} navbarItems={services} />
            <Link to={careers.key} className="navbar-item">
              {t('careers')}
            </Link>
            <Link to={joinUs.key} className="navbar-item">
              {t('join-us')}
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <FaGlobeAmericas />
              </div>
              <div className="navbar-dropdown">
                <a href="#" onClick={() => changeLanguage('en')} className="navbar-item sub-item capitalize">
                  en
                </a>
                <a href="#" onClick={() => changeLanguage('fr')} className="navbar-item sub-item capitalize">
                  fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  .navbar-dropdown {
    padding: 0;
  }

  .navbar-item {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sub-item {
    border-left: 4px solid transparent;
    height: 40px;
    text-transform: none;

    &:hover {
      border-left: 4px solid ${Colors.yellow};
    }
  }
`;
