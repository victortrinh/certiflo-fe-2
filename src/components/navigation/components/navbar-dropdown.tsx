import { Link } from 'react-router-dom';

export type NavbarItem = {
  name: string;
  key: string;
};

type Props = {
  name: string;
  navbarItems: NavbarItem[];
};

export const NavbarDropdown = ({ name, navbarItems }: Props) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link">{name}</div>
    <div className="navbar-dropdown">
      {navbarItems.map((navbarItem) => (
        <Link to={navbarItem.key} key={navbarItem.key} className="navbar-item sub-item">
          {navbarItem.name}
        </Link>
      ))}
    </div>
  </div>
);
