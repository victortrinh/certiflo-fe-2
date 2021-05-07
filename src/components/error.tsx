import { PageContainer } from './page-container';

type Props = {
  errorMessage: string;
  title: string;
};

export const Error = ({ errorMessage, title }: Props) => (
  <PageContainer>
    <h1>{title}</h1>
    <div className="notification is-danger is-light">{errorMessage}</div>
  </PageContainer>
);
