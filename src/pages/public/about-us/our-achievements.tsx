import { Achievement, AchievementData, achievementApi } from '@/api/endpoints/achievements/achievements';
import {
  AchievementType,
  AchievementTypeData,
  achievementTypeApi,
} from '@/api/endpoints/achievements/achievements-types';
import { Suspense, useEffect, useMemo, useState } from 'react';

import { Error } from '@/components/error';
import { Image } from '@components/image';
import { PageContainer } from '@components/page-container';
import { Skeleton } from '@components/skeleton/skeleton';
import { SkeletonTabs } from '@/components/skeleton/skeleton-tabs';
import { SkeletonTiles } from '@/components/skeleton/skeleton-tiles';
import classNames from 'classnames';
import { getClient } from '@/client/client-provider';
import { useGet } from '@/api/endpoints/hooks/use-get';
import { useTranslation } from 'react-i18next';

export const OurAchievements = () => {
  const isCertipro = getClient() === 'Certipropane';

  const { response: achievementResponse, errorMessage: achiementErrorMessage } = useGet<AchievementData, Achievement>(
    achievementApi,
  );
  const { response: achiementTypeResponse, errorMessage: achiementTypeErrorMessage } = useGet<
    AchievementTypeData,
    AchievementType
  >(achievementTypeApi);

  const achievements = useMemo(
    () =>
      achievementResponse?.realizations
        .filter((x) => (isCertipro ? x.isCertipropane : !x.isCertipropane))
        .sort((x) => x.displayOrder),
    [achievementResponse],
  );

  const achievementTypes = useMemo(
    () =>
      achiementTypeResponse?.realizationTypes.filter((x) =>
        achievements?.map((x) => x.realizationTypeId).includes(x.id),
      ),
    [achievements, achiementTypeResponse],
  );

  const [selectedAchievementTypeId, setSelectedAchievementTypeId] = useState<number | undefined>();

  useEffect(() => {
    setSelectedAchievementTypeId(achievementTypes?.[0]?.id);
  }, [achievementTypes]);

  const [clickedImage, setClickedImage] = useState<string>();

  const [t, i18n] = useTranslation();

  if (achiementErrorMessage) {
    return <Error errorMessage={achiementErrorMessage} title={t('realizations')} />;
  }

  if (achiementTypeErrorMessage) {
    return <Error errorMessage={achiementTypeErrorMessage} title={t('realizations')} />;
  }

  const isEnglish = i18n.language === 'en';

  const tabs = () => {
    if (!achievementTypes && !selectedAchievementTypeId) {
      return <SkeletonTabs />;
    }

    return (
      <div className="tabs">
        <ul>
          {achievementTypes?.map((x) => (
            <li
              key={x.id}
              onClick={() => setSelectedAchievementTypeId(x.id)}
              className={classNames({ 'is-active': selectedAchievementTypeId === x.id })}
            >
              <a>{isEnglish ? x.realizationTypeEn : x.realizationTypeFr}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const modal = (
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
  );

  const cards = () => {
    if (!achievements && !selectedAchievementTypeId) {
      return <SkeletonTiles />;
    }

    return (
      <>
        {modal}
        <div className="columns is-tablet is-multiline">
          {achievements
            ?.filter((x) => x.realizationTypeId === selectedAchievementTypeId)
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
                        <Row title={t('specification')} description={x.specification} />
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
    );
  };

  return (
    <PageContainer>
      <h1>{t('realizations')}</h1>
      {tabs()}
      {cards()}
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
