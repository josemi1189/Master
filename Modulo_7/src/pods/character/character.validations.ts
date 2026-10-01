import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { minNumber } from '@lemoncode/fonk-min-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    species: [Validators.required],
    gender: [Validators.required],
    city: [Validators.required],
    status: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
