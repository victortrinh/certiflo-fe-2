import { getAxiosClient } from '../../axiosClientFactory';
import { Data, ErrorData } from '../../response';

const client = getAxiosClient();

export type Achievement = {
  capacity: string;
  compartments: string;
  descriptionEn: string;
  descriptionFr: string;
  displayOrder: number;
  id: number;
  image: string;
  isCertipropane: boolean;
  material: string;
  projectTypeEn: string;
  projectTypeFr: string;
  realizationTypeId: number;
  specification: string;
};

export type AchievementData = Data & {
  response: {
    realizations: Achievement[];
  };
};

const baseURL = '/api/realization';

export class AchievementApi {
  async get() {
    return this.perform('get', `${baseURL}/all`);
  }

  async perform(method: any, resource: any, data: Achievement | null = null) {
    return client({
      method,
      url: resource,
      data,
    }).then(
      (resp: any): AchievementData => ({ isError: false, response: resp.data }),
      (error: any): ErrorData => ({
        isError: true,
        response: error.response?.data?.message ?? 'Error with back-end',
      }),
    );
  }
}

export const achievementApi = new AchievementApi();
