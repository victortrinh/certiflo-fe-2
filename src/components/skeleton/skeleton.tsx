import styled, { css } from 'styled-components';

type Props = {
  height: string;
  width: string;
};

export const Skeleton = ({ height, width }: Props) => <StyledSkeleton height={height} width={width} />;

const StyledSkeleton = styled.div<Props>`
  ${(props) => css`
    height: ${props.height};
    width: ${props.width};
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
