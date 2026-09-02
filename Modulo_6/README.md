# Módulo 6 - React Testing

## Test del mapper: project.mapper.ts

`/src/pods/project/project.mapper.ts`

**Datos mockeados de prueba**

```ts
const mockData: API.Project = {
  id: '1',
  name: 'Nombre',
  isActive: true,
  comments: 'Comentario',
  externalId: '1234',
  employees: [{ id: '1', employeeName: 'Nombre apellido', isAssigned: true }],
};
```

- Comprueba salida correcta de los datos al pasar por el mapper:

```ts
it('should map Employee Summary to view model', () => {
  //Arrange
  const data: API.Project = mockData;
  //Act
  const result: viewModel.Project = mapProjectFromApiToVm(data);

  //Assert
  const expectResult: viewModel.Project = {
    id: '1',
    name: 'Nombre',
    isActive: true,
    comments: 'Comentario',
    externalId: '1234',
    employees: [{ id: '1', employeeName: 'Nombre apellido', isAssigned: true }],
  };
  expect(result).toEqual(expectResult);
});
```

- Confirma que devuelva objeto de datos con valores vacíos si es undefined:

```ts
it('should return empty data when fill a undefined value', () => {
  //Arrange
  const data: API.Project = undefined!;
  //Act
  const result: viewModel.Project = mapProjectFromApiToVm(data);

  //Assert
  const expectResult: viewModel.Project = viewModel.createEmptyProject();
  expect(result).toEqual(expectResult);
});
```

- Confirma que devuelva objeto de datos con valores vacíos si es null:

```ts
it('should return empty data when fill a null value', () => {
    //Arrange
    const data: API.Project = null!;
    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(data);
    //Assert
    const expectResult: viewModel.Project = viewModel.createEmptyProject();
    expect(result).toEqual(expectResult);
```

<br>

## Test del componente: ConfirmationDialogComponent

`/src/common/componentes/confirmation-dialog/confirmation-dialog.component.tsx`

Utilizada la librería testing-library (https://testing-library.com/).

Props del componente declaradas:

```ts
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
```

### Test generados

- Comprueba que muestra el `título` de la modal recibido por props:

```ts
it('should display title', () => {
  [...]

  // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const titleElement = screen.getByText('Título modal');
    expect(titleElement).toBeInTheDocument();
```

<br>

- Comprueba que muestra el contenido recibido como `children`.

```ts
 it('should display children content element', () => {
  [...]
  // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const contentElement = screen.getByText('Contenido modal');
    expect(contentElement).toBeInTheDocument();
```

<br>
Para facilitar esta tarea instalamos la librería `userEvent` que simula la interacción del usuario completa.

> `npm install --save-dev @testing-library/user-event`

<br>

- Comprueba que existe el botón `Aceptar` y que al pulsar sobre el botón se ejecuta el método `onAccept`.

```ts
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
```

<br>
- Comprueba que existe el botón `Cancelar` y que al pulsar sobre el botón se ejecuta el método `onAccept`.

```ts
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
```
