import styled, { useTheme } from 'styled-components';

import { Colors } from '@/common/colors';
import { Image } from '@components/image';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/skeleton/skeleton';
import { Suspense } from 'react';
import { joinUs } from '@/routes/pages/public/join-us';
import { useTranslation } from 'react-i18next';

export const MissionCommitmentValues = () => {
  const theme = useTheme();
  const [t] = useTranslation();

  return (
    <StyledMissionCommitmentValues>
      <div className="columns is-tablet is-variable is-3">
        <Column alt="mission" source={theme.missionData} title={t('mission-title')} value={t('mission')} />
        <Column alt="commitment" source={theme.commitmentData} title={t('commitment-title')} value={t('commitment')} />
        <Column alt="values" source={theme.valuesData} title={t('values-title')} value={t('values')} />
      </div>
    </StyledMissionCommitmentValues>
  );
};

type Props = {
  alt: string;
  source: string;
  title: string;
  value: string;
};

const Column = ({ alt, source, title, value }: Props) => (
  <div className="column">
    <Link to={joinUs.key} className="scale-on-hover">
      <Suspense fallback={<Skeleton height="180px" width="180px" />}>
        <Image alt={alt} className="sister-image" height="180" source={source} width="180" />
      </Suspense>
      <h4>{title}</h4>
      <div className="sub-title">{value}</div>
    </Link>
  </div>
);

const StyledMissionCommitmentValues = styled.div`
  margin-top: 80px;

  a {
    text-decoration: none;
    color: ${Colors.black};
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sub-title {
    margin-top: 18px;
  }
`;
