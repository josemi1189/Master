import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;

export const container = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 1fr);
  align-items: start;
  gap: 2em;
  width: min(100%, 1100px);
  max-width: 1100px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const content = css`
  min-width: 0;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 767px) {
    order: 2;
  }
`;

export const imageContainer = css`
  order: 2;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 767px) {
    order: 1;
    justify-self: center;
  }

  @media (min-width: 768px) {
    justify-self: end;
  }
`;
export const genderContainer = css`
  display: flex;
  flex-direction: row;
  gap: 3em;
  padding: 2em 0;
`;

export const btnData = css`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 2em 0;
`;
