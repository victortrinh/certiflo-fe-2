import styled, { css } from 'styled-components';

type Props = {
  borderRadius?: string;
  height: string;
  width: string;
};

export const Skeleton = ({ borderRadius, height, width }: Props) => (
  <StyledSkeleton height={height} width={width} borderRadius={borderRadius} />
);

const StyledSkeleton = styled.div<Props>`
  ${({ borderRadius, height, width }) => css`
    height: ${height};
    width: ${width};
    border-radius: ${borderRadius};
  `}

  background-color: #e2e2e2;
  animation: loading 0.5s infinite alternate;
  position: relative;
  z-index: 2;

  @keyframes loading {
    from {
      background-color: #b8b3b3;
    }
    to {
      background-color: hsl(0, 5%, 78%);
    }
  }
`;
