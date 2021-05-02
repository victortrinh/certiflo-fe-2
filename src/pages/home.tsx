import { Colors } from '@/common/colors';
import { Image } from '@/components/image';
import { MissionCommitmentValues } from '@components/home/mission-commitment-values';
import { SisterCompanies } from '@components/home/sister-companies';
import { Skeleton } from '@components/skeleton';
import { Suspense } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const [t] = useTranslation();

  return (
    <StyledHome>
      <h1>{t('main-text')}</h1>
      <h2>{t('secondary-text')}</h2>
      <Suspense fallback={<Skeleton height="620px" width="1016px" />}>
        <Image
          alt="Truck"
          className="truck"
          height="620px"
          source={`${process.env.PUBLIC_URL}/images/truck.png`}
          width="1016px"
        />
      </Suspense>
      <div className="background" />
      <div className="container">
        <SisterCompanies className="sister" />
        <div className="description">
          <h4>{t('main-description-1-title')}</h4>
          <div className="main-description" dangerouslySetInnerHTML={{ __html: t('main-description-1') }} />
        </div>
        <MissionCommitmentValues />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    background: ${(props) => props.theme.homeBackground};
    height: 600px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .container {
    color: ${Colors.black};
  }

  text-align: center;
  padding-top: 68px;
  color: ${(props) => props.theme.homeColor};

  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
  }

  h2 {
    font-size: 24px;
    line-height: 33px;
    margin-top: 12px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
  }

  .truck {
    padding-top: 50px;
  }

  h1,
  h2 {
    padding: 0 12px;
  }

  h1,
  h2,
  .truck,
  .sister {
    position: relative;
    z-index: 2;
  }

  .description {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-description {
      margin-top: 20px;
      max-width: 800px;
    }
  }
`;
