import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  console.log('src: ', character);
  return (
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
              <TextFieldComponent name="city" label="City" />
              <TextFieldComponent name="status" label="Status" />

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

              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </div>
            <div className={classes.imageContainer}>
              <Box
                component="img"
                src={character.image || 'Rick-and-Morty.webp'}
                alt={character.name}
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: 2,
                  boxShadow: 3,
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
