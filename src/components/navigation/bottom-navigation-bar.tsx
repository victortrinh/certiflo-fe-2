import styled, { useTheme } from 'styled-components';

import { Colors } from '@/common/colors';
import { Image } from '@components/image';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/skeleton/skeleton';
import { Suspense } from 'react';
import { careers } from '@/routes/pages/public/careers';
import { joinUs } from '@/routes/pages/public/join-us';
import { useTranslation } from 'react-i18next';

export const BottomNavigationBar = () => {
  const theme = useTheme();
  const [t] = useTranslation();

  return (
    <StyledBottomNavigationBar>
      <div className="container">
        <div className="columns is-tablet">
          <div className="column is-narrow careers-link">
            <Link to={careers.key}>{t('careers')}</Link>
          </div>
          <div className="column is-narrow">
            <Link to={joinUs.key}>{t('join-us')}</Link>
          </div>
          <div className="column logo">
            <Suspense fallback={<Skeleton height="85px" width="295px" />}>
              <Image alt="Company" height="32" source={theme.logo} width="150" />
            </Suspense>
          </div>
        </div>
        <div className="copyright" dangerouslySetInnerHTML={{ __html: t('copyright') }} />
      </div>
    </StyledBottomNavigationBar>
  );
};

const StyledBottomNavigationBar = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  margin-top: 80px;

  a {
    color: ${Colors.black};
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .careers-link {
    margin-right: 30px;
  }

  .container {
    padding: 40px 20px 0 20px;
  }

  .copyright {
    letter-spacing: 0.875px;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  .logo {
    text-align: right;
  }

  @media only screen and (max-width: 768px) {
    .column {
      justify-content: center;
      width: 100%;
      display: flex;
    }
  }
`;
