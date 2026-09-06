import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

describe('/src/common/components/spinner/spinner.component.ts', () => {
  it('should be displayed if promiseInProgress is true', async () => {
    // Arrange

    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);
    const modalElement = await screen.queryByRole('presentation');
    screen.debug;
    // Assert
    expect(modalElement).toBeInTheDocument();
  });

  it('should not be displayed if promiseInProgress is false', async () => {
    // Arrange

    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);
    const modalElement = await screen.queryByRole('presentation');

    // Assert
    expect(modalElement).not.toBeInTheDocument();
  });
});
