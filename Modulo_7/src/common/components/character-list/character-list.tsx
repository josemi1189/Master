import React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router/routes.js';
import * as classes from './character-list.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

interface Props {
  titleAccordion: string;
  charactersById: Record<string, string>;
  characters: string[];
}
export const CharacterList: React.FC<Props> = (props) => {
  const { titleAccordion, characters, charactersById } = props;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography
          component="h2"
          sx={{ fontWeight: 'bold', fontSize: '1.3em' }}
        >
          {titleAccordion}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};
