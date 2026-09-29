import * as React from 'react';
import {
  createEmptyLocationEntity,
  LocationEntity,
} from './location-collection.vm';
import { getLocationCollection } from './api';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] =
    React.useState<LocationEntity>(createEmptyLocationEntity());

  const loadLocationCollection = React.useCallback(async (page: number = 1) => {
    const result = await getLocationCollection(page);
    setLocationCollection(mapLocationCollectionFromApiToVm(result));
  }, []);

  return {
    locationCollection,
    loadLocationCollection,
  };
};
