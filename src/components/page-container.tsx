import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => (
  <StyledPageContainer className="container">{children}</StyledPageContainer>
);

const StyledPageContainer = styled.div`
  h1 {
    font-size: 20px;
    margin: 30px 0 20px;
    text-align: center;
    width: 100%;
  }
`;
