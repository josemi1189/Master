import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { ModalData } from './components/episodes-modal/episodes-modal.container';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const DataModal: React.FC = () => {
  return <div>Ventana modal</div>;
};

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  const episodesId: string[] = character.episode.map(
    (url) => url.split('/').pop() || ''
  );

  return (
    <>
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {({ values, handleChange }) => (
          <Form className={classes.root}>
            <div className={classes.container}>
              <div className={classes.content}>
                <TextFieldComponent name="name" label="Name" />
                <TextFieldComponent name="species" label="Species" />
                <TextFieldComponent name="locationName" label="Location" />
                <FormControl>
                  <InputLabel variant="outlined" id="status-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="status-label"
                    value={character.status}
                    name="status"
                    id="status"
                    label="Status"
                  >
                    <MenuItem value={'Alive'}>Alive</MenuItem>
                    <MenuItem value={'Dead'}>Dead</MenuItem>
                    <MenuItem value={'unknown'}>unknown</MenuItem>
                  </Select>
                </FormControl>
                <Box component={'div'} className={classes.genderContainer}>
                  <RadioGroup
                    aria-labelledby="gender"
                    defaultValue="no-say"
                    value={values.gender}
                    name="gender"
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="unknown"
                      control={<Radio />}
                      label="I prefer not to say"
                    />
                  </RadioGroup>
                  <div className={classes.btnData}>
                    <ModalData
                      episodes={episodesId}
                      characterName={character.name}
                    />
                  </div>
                </Box>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </div>
              <div className={classes.imageContainer}>
                <Box
                  component="img"
                  src={character.image || 'Rick-and-Morty.webp'}
                  alt={character.name}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
