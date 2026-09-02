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

<br>

## Test del hook: useConfirmationDialog

`/src/common/componentes/confirmation-dialog/confirmation-dialog.hook.ts`

- Comprueba que se inicializa con `isOpen` en **false**.

```ts
it('should initialize with isOpen as false', () => {
  //Arrange

  // Act
  const { result } = renderHook(() => useConfirmationDialog());

  // Assert
  expect(result.current.isOpen).toBe(false);
});
```

- Comprueba que al abrir la ventana modal, `isOpen` cambia a **true** y establece los datos en `itemToDelete` correctamente.

```ts
it('should set isOpen to true and assign the ID and name to be deleted', () => {
  // Arrange
  const itemToDelete: Lookup = { id: '1', name: 'nombre' };
  // Act
  const { result } = renderHook(() => useConfirmationDialog());

  act(() => {
    result.current.onOpenDialog(itemToDelete);
  });

  // Assert
  expect(result.current.isOpen).toEqual(true);
  expect(result.current.itemToDelete).toEqual(itemToDelete);
});
```

<br>

> Cualquier modificación de estado se debe wrappear en `act(() => {})`.

<br>

- Comprueba que si se seleccionan dos items distintos, actualiza los datos al último seleccionado:

```ts
it('should update itemToDelete to the latest item when called multiple times in a row', () => {
  // Arrange
  const item1ToDelete: Lookup = { id: '1', name: 'nombre1' };
  const item2ToDelete: Lookup = { id: '2', name: 'nombre2' };
  // Act
  const { result } = renderHook(() => useConfirmationDialog());

  act(() => {
    result.current.onOpenDialog(item1ToDelete);
    result.current.onOpenDialog(item2ToDelete);
  });

  expect(result.current.itemToDelete).equal(item2ToDelete);
});
```

- Comprueba que al llamar a `onClose` cambia el estado de `isOpen` a **false**.

```ts
it('should indicate that it is closed when calling onClose', () => {
  // Arrange
  const itemToDelete: Lookup = { id: '1', name: 'nombre' };
  // Act
  const { result } = renderHook(() => useConfirmationDialog());

  act(() => {
    result.current.onOpenDialog(itemToDelete);
    result.current.onClose();
  });

  // Assert
  expect(result.current.isOpen).toEqual(false);
});
```

- Comprueba que al llamar a `onAccept` restaura los datos a valores vacíos y confirma que `isOpen` sigue estando en **true**.

  > Es el componente quien llama a `onAccept` y `onClose` al pulsar el botón **Aceptar**.

```ts
it('should restore the option to delete during an empty search when calling `onAccept`, and not set `isOpen` to true', () => {
  // Arrange
  const itemToDelete: Lookup = { id: '1', name: 'nombre' };
  // Act
  const { result } = renderHook(() => useConfirmationDialog());

  act(() => {
    result.current.onOpenDialog(itemToDelete);
    result.current.onAccept();
  });

  // Assert
  expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  expect(result.current.isOpen).toBe(true);
});
```
