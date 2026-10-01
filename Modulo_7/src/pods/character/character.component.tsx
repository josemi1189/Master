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
import { ModalData } from './components/episodes-modal';

interface Props {
  character: Character;
  isSave: 'save' | 'error' | null;
  onSave: (character: Character) => void;
}

const saveButtonConfig = {
  save: {
    text: 'Changes saved successfully',
    color: 'success',
  },
  error: {
    text: 'It was not possible to save the changes',
    color: 'error',
  },
  idle: {
    text: 'Save',
    color: 'primary',
  },
} as const;

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave, isSave } = props;

  const episodesId: string[] = character.episode.map(
    (url) => url.split('/').pop() || ''
  );
  console.log(character);

  const buttonConfig = isSave
    ? saveButtonConfig[isSave]
    : saveButtonConfig.idle;

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
                <TextFieldComponent name="location" label="Location" />
                <TextFieldComponent
                  name="bestSentence"
                  label="Best Sentence"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <FormControl>
                  <InputLabel variant="outlined" id="status-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="status-label"
                    value={values.status}
                    name="status"
                    id="status"
                    label="Status"
                    onChange={handleChange}
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
                    onChange={handleChange}
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

                <Button
                  type="submit"
                  variant="contained"
                  color={buttonConfig.color}
                  className={classes.saveButton}
                >
                  <span
                    key={isSave ?? 'idle'}
                    className={classes.saveButtonLabel}
                  >
                    {buttonConfig.text}
                  </span>
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
