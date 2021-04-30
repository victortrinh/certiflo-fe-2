import { Colors } from '../../common/colors';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// const home = 'Home';

export const NavigationBar = () => {
  // const location = useLocation();
  // const history = useHistory();

  // const isHome = location.pathname === '/';

  return (
    <StyledNavigation>
      {
        // TODO
      }
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  background-color: ${Colors.primary};
`;
