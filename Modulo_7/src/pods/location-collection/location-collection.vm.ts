export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  residents: string[];
}

export interface LocationEntity {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Location[];
}

export const createEmptyLocationEntity = (): LocationEntity => ({
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
});
