import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Character } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Male, Female, QuestionMark } from '@mui/icons-material';

interface Props {
  character: Character;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
const statusClasses = {
  alive: classes.alive,
  dead: classes.dead,
};
const genderIcon = {
  male: <Male />,
  female: <Female />,
  unknown: <QuestionMark />,
};

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <Card>
      <CardMedia
        image={character.image}
        title={character.name}
        sx={{ height: 0, paddingTop: '56.25%' }}
      />
      <CardHeader
        avatar={
          <Avatar aria-label="Character">{character.name.slice(0, 1)}</Avatar>
        }
        title={character.name}
        slotProps={{
          title: {
            sx: {
              fontWeight: 'bold',
              fontSize: '1.2em',
            },
          },
        }}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            <Typography
              component="span"
              variant="inherit"
              className={
                statusClasses[character.status?.toLowerCase()] ||
                classes.unknown
              }
            >
              {character.status}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <span className={classes.textBold}>Gender:</span>
            <Typography component="span" variant="inherit">
              {genderIcon[character.gender?.toLowerCase()] ||
                genderIcon.unknown}{' '}
              {character.gender}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <span className={classes.textBold}>Location: </span>
            <span>{character.location.name}</span>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
