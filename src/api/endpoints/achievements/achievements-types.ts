import { GenericApi, ModelData } from '../generic-api';

export type AchievementType = {
  displayOrder: number;
  id: number;
  realizationTypeEn: string;
  realizationTypeFr: string;
};

export interface AchievementTypeData extends ModelData {
  response: {
    realizationTypes: AchievementType[];
  };
}

export const achievementTypeApi = new GenericApi<AchievementTypeData, AchievementType>('/api/realizationType');
