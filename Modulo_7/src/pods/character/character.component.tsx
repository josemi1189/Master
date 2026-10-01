import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {({ values, handleChange }) => (
        <Form className={classes.root}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2em',
              maxWidth: '700px',
            }}
          >
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
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
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
        </Form>
      )}
    </Formik>
  );
};
