import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

type Props = {
  onClick?: () => void;
};

export const Hamburger = ({ onClick }: Props) => {
  const theme = useTheme();

  return (
    <div className="navbar-brand container">
      <Link className="navbar-item" to="/">
        <img className="lazyload" src={theme.logo} width="151px" height="43px" alt="Company asset" />
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
};
