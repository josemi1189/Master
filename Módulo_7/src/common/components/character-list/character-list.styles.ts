import { css } from '@emotion/css';
export const characters = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1em;
  justify-content: space-between;
  list-style: none;
  padding-left: 0.2em;

  & > li {
    & ::before {
      content: '> ';
    }
    & :hover {
      box-shadow: 0 0 1px 1px #ddd;
      border-radius: 5px;
    }
    & a {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      padding: 0.5em;
    }
  }
`;
