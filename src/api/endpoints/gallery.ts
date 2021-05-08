import { GenericApi, ModelData } from './generic-api';

export type Gallery = {
  displayOrder: number;
  id: number;
  image: string;
  isCertipropane: boolean;
};

export interface GalleryData extends ModelData {
  response: {
    galleryImages: Gallery[];
  };
}

export const galleryApi = new GenericApi<GalleryData, Gallery>('/api/galleryImage');
