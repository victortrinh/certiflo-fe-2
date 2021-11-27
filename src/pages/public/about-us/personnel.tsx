import { Employee, EmployeeData, personnelApi } from '@/api/endpoints/personnel';
import React, { Suspense } from 'react';

import { Error } from '@/components/error';
import { Image } from '@components/image';
import { PageContainer } from '@/components/page-container';
import { Skeleton } from '@/components/skeleton/skeleton';
import { getClient } from '@/client/client-provider';
import { useGet } from '@/api/endpoints/hooks/use-get';
import { useTranslation } from 'react-i18next';

export const Personnel = () => {
  const [t] = useTranslation();
  const { response, errorMessage } = useGet<EmployeeData, Employee>(personnelApi);
  const client = getClient();

  const employees = response?.employees
    .filter((employee) => employee.company === client)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  if (errorMessage) {
    <Error errorMessage={errorMessage} title={t('current-employees')} />;
  }

  const employeeCards = () => {
    if (!employees) {
      return null;
    }

    return (
      <div className="card-columns">
        {employees.map((employee) => (
          <div className="clickable scale-on-hover" key={employee.id}>
            <Suspense fallback={<Skeleton height="280px" width="auto" />}>
              <Image alt={employee.firstName} height="280px" source={employee.image} width="auto" />
            </Suspense>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageContainer>
      <h1>{t('current-employees')}</h1>
      {employeeCards()}
    </PageContainer>
  );
};
