import { GenericApi, ModelData } from '../generic-api';
import { useEffect, useState } from 'react';

import { ErrorData } from '@/api/response';
import { PropType } from '@/common/utils';

export const useGet = <T extends ModelData, Model>(genericApi: GenericApi<T, Model>) => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [response, setResponse] = useState<PropType<T, 'response'>>();

  useEffect(() => {
    const get = async () => {
      await genericApi.get().then((data: T | ErrorData) => {
        if (data.isError) {
          setErrorMessage((data as ErrorData).response);
        } else {
          setResponse(data.response);
        }
      });
    };

    get();
  }, []);

  return { errorMessage, response };
};
