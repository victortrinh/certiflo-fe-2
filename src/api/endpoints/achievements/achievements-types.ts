import { getAxiosClient } from '../../axiosClientFactory';
import { Data, ErrorData } from '../../response';

const client = getAxiosClient();

export type AchievementType = {
  displayOrder: number;
  id: number;
  realizationTypeEn: string;
  realizationTypeFr: string;
};

export type AchievementTypeData = Data & {
  response: {
    realizationTypes: AchievementType[];
  };
};

const baseURL = '/api/realizationType';

export class AchievementTypeApi {
  async get() {
    return this.perform('get', `${baseURL}/all`);
  }

  async perform(method: any, resource: any, data: AchievementType | null = null) {
    return client({
      method,
      url: resource,
      data,
    }).then(
      (resp: any): AchievementTypeData => ({ isError: false, response: resp.data }),
      (error: any): ErrorData => ({
        isError: true,
        response: error.response?.data?.message ?? 'Error with back-end',
      }),
    );
  }
}

export const achievementTypeApi = new AchievementTypeApi();
