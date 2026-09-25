import { css } from '@emotion/css';

export const content = css`
  display: flex;
  flex-direction: column;
`;

export const alive = css`
  padding: 0.1em 0.5em;
  border-radius: 15px;
  background: #209e00;
`;
export const dead = css`
  padding: 0.1em 0.5em;
  border-radius: 15px;
  background: #c20000;
  color: #fff;
`;

export const unknown = css`
  padding: 0.1em 0.5em;
  border-radius: 15px;
  background: #999;
  text-transform: capitalize;
`;

export const textBold = css`
  font-weight: bold;
`;
