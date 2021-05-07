import { Achievement, AchievementData, achievementApi } from '@/api/endpoints/achievements/achievements';
import {
  AchievementType,
  AchievementTypeData,
  achievementTypeApi,
} from '@/api/endpoints/achievements/achievements-types';
import { Suspense, useEffect, useState } from 'react';

import { Error } from '@/components/error';
import { ErrorData } from '@/api/response';
import { Image } from '@components/image';
import { PageContainer } from '@components/page-container';
import { Skeleton } from '@components/skeleton/skeleton';
import { SkeletonTabs } from '@/components/skeleton/skeleton-tabs';
import { SkeletonTiles } from '@/components/skeleton/skeleton-tiles';
import classNames from 'classnames';
import { getClient } from '@/client/client-provider';
import { useTranslation } from 'react-i18next';

export const OurAchievements = () => {
  const [achievementTypes, setAchievementTypes] = useState<AchievementType[]>([]);
  const [selectedAchiementTypeId, setSelectedAchieventTypeId] = useState<number>();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [t, i18n] = useTranslation();
  const [clickedImage, setClickedImage] = useState<string>();

  const isCertipro = getClient() === 'Certipropane';

  useEffect(() => {
    const get = async () => {
      await achievementApi.get().then((data) => {
        if (data.isError) {
          setErrorMessage((data as ErrorData).response);
        } else {
          const achievementResponse = (data as AchievementData).response.realizations.filter((x) =>
            isCertipro ? x.isCertipropane : !x.isCertipropane,
          );
          setAchievements(achievementResponse);

          achievementTypeApi.get().then((data) => {
            if (data.isError) {
              setErrorMessage((data as ErrorData).response);
            } else {
              const response = (data as AchievementTypeData).response.realizationTypes;
              const allTypes = achievementResponse.map((x) => x.realizationTypeId);
              setAchievementTypes(response.filter((x) => allTypes.includes(x.id)));
              setSelectedAchieventTypeId(response[0].id);
              setIsLoading(false);
            }
          });
        }
      });
    };

    get();
  }, []);

  if (errorMessage) {
    return <Error errorMessage={errorMessage} title={t('realizations')} />;
  }

  const isEnglish = i18n.language === 'en';

  return (
    <PageContainer>
      <h1>{t('realizations')}</h1>
      {isLoading ? (
        <SkeletonTabs />
      ) : (
        <div className="tabs">
          <ul>
            {achievementTypes.map((x) => (
              <li
                key={x.id}
                onClick={() => setSelectedAchieventTypeId(x.id)}
                className={classNames({ 'is-active': selectedAchiementTypeId === x.id })}
              >
                <a>{isEnglish ? x.realizationTypeEn : x.realizationTypeFr}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading ? (
        <SkeletonTiles />
      ) : (
        <>
          <div className={classNames('modal', { 'is-active': clickedImage })}>
            <div className="modal-background" onClick={() => setClickedImage(undefined)} />
            <div className="modal-content">
              <p className="image">
                {clickedImage && (
                  <Suspense fallback={<Skeleton height="280px" width="100%" />}>
                    <Image alt="achievement" height="100%" source={clickedImage} width="100%" />
                  </Suspense>
                )}
              </p>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setClickedImage(undefined)} />
          </div>
          <div className="columns is-tablet is-multiline">
            {achievements
              .filter((x) => x.realizationTypeId === selectedAchiementTypeId)
              .map((x) => (
                <div className="column is-half-tablet is-one-third-desktop clickable scale-on-hover" key={x.id}>
                  <div className="card">
                    <div className="card-image" onClick={() => setClickedImage(x.image)}>
                      <Suspense fallback={<Skeleton height="280px" width="100%" />}>
                        <Image alt={x.descriptionEn} height="280px" source={x.image} width="100%" />
                      </Suspense>
                    </div>
                    <div className="card-content">
                      <table className="table is-fullwidth">
                        <tbody>
                          <Row title={t('description')} description={isEnglish ? x.descriptionEn : x.descriptionFr} />
                          <Row title={t('type')} description={isEnglish ? x.projectTypeEn : x.projectTypeFr} />
                          <Row title={t('tank')} description={x.specification} />
                          <Row title={t('capacity-title')} description={x.capacity} />
                          <Row title={t('material')} description={x.material} />
                          <Row title={t('compartments')} description={x.compartments} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </PageContainer>
  );
};

type Props = {
  title: string;
  description?: string;
};

const Row = ({ title, description }: Props) => {
  if (!description) {
    return null;
  }

  return (
    <tr>
      <th>{title}</th>
      <td>{description}</td>
    </tr>
  );
};
