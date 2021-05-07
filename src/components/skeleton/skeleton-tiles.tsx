import { Skeleton } from '@components/skeleton/skeleton';
import styled from 'styled-components';

export const SkeletonTiles = () => {
  const column = (
    <div className="column is-half-tablet is-one-third-desktop">
      <div className="card">
        <div className="card-image">
          <Skeleton width="100%" height="200px" />
        </div>
        <div className="card-content">
          <StyledCard className="content">
            <Skeleton width="100%" height="14px" />
            <Skeleton width="100%" height="14px" />
            <Skeleton width="100%" height="14px" />
            <Skeleton width="100%" height="14px" />
          </StyledCard>
        </div>
      </div>
    </div>
  );

  return (
    <div className="columns is-tablet is-multiline">
      {column}
      {column}
      {column}
      {column}
      {column}
    </div>
  );
};

const StyledCard = styled.div`
  div {
    margin-bottom: 8px;
  }
`;
