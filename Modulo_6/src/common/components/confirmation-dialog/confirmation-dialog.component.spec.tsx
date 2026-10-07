import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  it('should display title', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      title: 'Título modal',
      onAccept: () => {},
      onClose: () => {},
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      isOpen: true,
      children: 'Contenido modal',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const titleElement = screen.getByText('Título modal');
    expect(titleElement).toBeInTheDocument();
  });

  it('should display children content element', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      title: 'Título modal',
      onAccept: () => {},
      onClose: () => {},
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      isOpen: true,
      children: 'Contenido modal',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const contentElement = screen.getByText('Contenido modal');
    expect(contentElement).toBeInTheDocument();
  });

  it('should call onAccept() when it clicks on "Aceptar" button', async () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      title: 'Título modal',
      onAccept: vi.fn(),
      onClose: () => {},
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      isOpen: true,
      children: 'Contenido modal',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButtonElement = screen.getByRole('button', {
      name: /aceptar/i,
    });

    // Assert
    expect(acceptButtonElement).toBeInTheDocument();

    await userEvent.click(acceptButtonElement);
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClose() when it clicks on "Cancelar" button', async () => {
    // Arrange

    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      title: 'Título modal',
      onAccept: () => {},
      onClose: vi.fn(),
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      isOpen: true,
      children: 'Contenido modal',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButtonElement = screen.getByRole('button', {
      name: /cancelar/i,
    });

    // Assert
    expect(closeButtonElement).toBeInTheDocument();

    await userEvent.click(closeButtonElement);

    expect(props.onClose).toHaveBeenCalled();
  });
});
