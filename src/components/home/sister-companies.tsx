import styled, { useTheme } from 'styled-components';

import { Colors } from '@/common/colors';
import { Image } from '@components/image';
import { Skeleton } from '@components/skeleton';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  className: string;
};

export const SisterCompanies = ({ className }: Props) => {
  const [t] = useTranslation();
  const theme = useTheme();

  const sisterCompanies = [
    theme.sisterCompanyLogo1,
    theme.sisterCompanyLogo2,
    {
      logo: `${process.env.PUBLIC_URL}/assets/logos/arenco.png`,
      url: 'http://www.arenco.ca',
    },
  ];

  const goToLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <StyledSisterCompanies className={className}>
      <h3>{t('our-sister-companies-title')}</h3>
      <div className="columns is-tablet is-variable is-3">
        {sisterCompanies.map((sisterCompany) => (
          <div key={sisterCompany.url} className="column clickable" onClick={() => goToLink(sisterCompany.url)}>
            <div className="sister-company">
              <Suspense fallback={<Skeleton height="85px" width="295px" />}>
                <Image
                  alt={sisterCompany.url}
                  className="sister-image"
                  height="85"
                  source={sisterCompany.logo}
                  width="295"
                />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </StyledSisterCompanies>
  );
};

const StyledSisterCompanies = styled.div`
  background-color: ${Colors.white};
  padding-top: 30px;

  .columns {
    margin-top: 28px;
  }

  .sister-company {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    transition: 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px 0;
    height: 170px;

    img {
      height: 100%;
      width: auto;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
