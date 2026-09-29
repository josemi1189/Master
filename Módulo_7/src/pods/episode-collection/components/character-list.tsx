import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router/routes.js';
import * as classes from './character-list.styles';

interface Props {
  charactersById: Record<string, string>;
  characters: string[];
}
export const CharacterList: React.FC<Props> = (props) => {
  const { characters, charactersById } = props;
  return (
    <div>
      <h3>Characters</h3>
      <ul className={classes.characters}>
        {characters.map((characterUrl) => {
          const characterId = Number(characterUrl.split('/').pop());
          const characterName = charactersById[characterId];

          return (
            <li key={characterId}>
              <Link to={`${linkRoutes.characterCollection}/${characterId}`}>
                {characterName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
