import * as API from './api';
import * as VM from './location-collection.vm';

export const mapLocationCollectionFromApiToVm = (
  location: API.LocationEntity
): VM.LocationEntity => ({
  info: location.info,
  results: location.results.map((location: API.Location) => ({
    id: location.id,
    name: location.name,
    type: location.type,
    dimension: location.dimension,
    residents: location.residents,
    created: location.created,
  })),
});
