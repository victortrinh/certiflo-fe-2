import { Link } from 'react-router-dom';

type Props = {
  onClick?: () => void;
};

export const Hamburger = ({ onClick }: Props) => (
  <div className="navbar-brand container">
    <Link className="navbar-item" to="/">
      <img className="lazyload" src="https://bulma.io/images/bulma-logo.png" width="112px" height="28px" alt="Bulma" />
    </Link>

    <div
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navigation-bar"
      onClick={onClick}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>
);
