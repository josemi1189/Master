import React from 'react';
import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

describe('/src/common/components/spinner/spinner.component.ts', () => {
  it('should be displayed if promiseInProgress is true', async () => {
    // Arrange
    const promiseInProgress = true;

    // Act
    render(<SpinnerComponent />);

    // Assert
  });
});
