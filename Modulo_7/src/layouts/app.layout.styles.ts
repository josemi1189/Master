import { css } from '@emotion/css';

export const content = css`
  margin: 2rem;
`;

export const toolbar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const nav = css`
  display: flex;
  flex-direction: row;
  gap: 1em;

  & > a {
    text-decoration: none;
    padding: 0.3em 1em;
    box-shadow: 0 0 3px 2px #777;
    border-radius: 8px;
    background: white;
  }
`;
