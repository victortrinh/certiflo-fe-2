import { NavbarDropdown, NavbarItem } from './components/navbar-dropdown';
import { assemblyMount, gallery, manufacturers, ourAchievements, personnel } from '@/routes/pages/public/about-us';
import { certification, serviceRepairs, usefulDocuments } from '@/routes/pages/public/services';
import { parts, tankers } from '@/routes/pages/public/products';

import { Hamburger } from './components/hamburger';
import { Link } from 'react-router-dom';
import { careers } from '@/routes/pages/public/careers';
import classNames from 'classnames';
import { joinUs } from '@/routes/pages/public/join-us';
import { useResize } from '@/hooks/useResize';
import { useState } from 'react';

export const NavigationBar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  useResize(() => setMenuExpanded(false));

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <Hamburger onClick={() => setMenuExpanded(!menuExpanded)} />

        <div id="navigation-bar" className={classNames('navbar-menu', { 'is-active': menuExpanded })}>
          <div className="navbar-end">
            <NavbarDropdown name="About us" navbarItems={aboutUs} />
            <NavbarDropdown name="Products" navbarItems={products} />
            <NavbarDropdown name="Services" navbarItems={services} />
            <Link to={careers.key} className="navbar-item">
              Careers
            </Link>
            <Link to={joinUs.key} className="navbar-item">
              Join us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const aboutUs: NavbarItem[] = [
  {
    name: 'Our achievements',
    key: ourAchievements.key,
  },
  {
    name: 'Personnel',
    key: personnel.key,
  },
  {
    name: 'Assembly / Mount',
    key: assemblyMount.key,
  },
  {
    name: 'Manufacturers',
    key: manufacturers.key,
  },
  {
    name: 'Gallery',
    key: gallery.key,
  },
];

const products: NavbarItem[] = [
  {
    name: 'Tankers',
    key: tankers.key,
  },
  {
    name: 'Parts',
    key: parts.key,
  },
];

const services: NavbarItem[] = [
  {
    name: 'Services and repairs',
    key: serviceRepairs.key,
  },
  {
    name: 'Certification',
    key: certification.key,
  },
  {
    name: 'Useful documents',
    key: usefulDocuments.key,
  },
];
