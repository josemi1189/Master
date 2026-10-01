import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { getEpisodesByIds } from './episodes-modal.api';
import { Episode } from './episodes.vm';

interface Props {
  episodes: string[];
  characterName: string;
}

export const ModalData: React.FC<Props> = (props) => {
  const { episodes, characterName } = props;
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [episodeData, setEpisodeData] = React.useState<Episode[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const episodeKey = episodes.filter(Boolean).join(',');

  React.useEffect(() => {
    if (!isVisible || !episodeKey) return;

    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    getEpisodesByIds(episodeKey.split(','))
      .then((result) => {
        if (isCurrent) setEpisodeData(result);
      })
      .catch(() => {
        if (isCurrent) setError('Could not load episodes.');
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [isVisible, episodeKey]);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="contained"
        color="info"
        onClick={handleOpen}
      >
        Episodes
      </Button>
      {isVisible && (
        <Dialog open={isVisible} onClose={handleClose} maxWidth="lg">
          <DialogTitle sx={{ textAlign: 'center' }}>
            Episodes Featuring {characterName}
          </DialogTitle>
          <DialogContent>
            {isLoading && <Typography>Loading episodes...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {!isLoading &&
              !error &&
              episodeData.map((episode) => (
                <div
                  key={episode.id}
                  style={{ padding: '0.6em 0', borderBottom: '1px solid #EEE' }}
                >
                  <Typography variant="h6">
                    {episode.episode}: {episode.name}
                  </Typography>
                  <Typography color="textSecondary">
                    Air date: {episode.air_date}
                  </Typography>
                </div>
              ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
