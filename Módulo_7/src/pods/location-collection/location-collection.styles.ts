import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const list = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem auto 0;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  box-shadow: 0 0 3px 4px #ddd;
`;
export const row = css`
  display: flex;
  flex-direction: row;
  gap: 0.4em;
  justify-content: flex-end;
`;

export const title = css`
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5em;
`;
export const date = css`
  font-weight: bold;
  padding-right: 0.5em;
`;

export const type = css`
  color: #666;
`;
