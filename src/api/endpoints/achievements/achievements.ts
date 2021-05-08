import { GenericApi, ModelData } from '../generic-api';

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

export interface AchievementData extends ModelData {
  response: {
    realizations: Achievement[];
  };
}

export const achievementApi = new GenericApi<AchievementData, Achievement>('/api/realization');
