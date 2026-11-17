import * as API from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('mapProjectFromApiToVm', () => {
  const mockData: API.Project = {
    id: '1',
    name: 'Nombre',
    isActive: true,
    comments: 'Comentario',
    externalId: '1234',
    employees: [{ id: '1', employeeName: 'Nombre apellido', isAssigned: true }],
  };

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
      employees: [
        { id: '1', employeeName: 'Nombre apellido', isAssigned: true },
      ],
    };
    expect(result).toEqual(expectResult);
  });

  it('should return empty data when fill a undefined value', () => {
    //Arrange
    const data: API.Project = undefined!;
    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(data);

    //Assert
    const expectResult: viewModel.Project = viewModel.createEmptyProject();
    expect(result).toEqual(expectResult);
  });

  it('should return empty data when fill a null value', () => {
    //Arrange
    const data: API.Project = null!;
    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(data);
    //Assert
    const expectResult: viewModel.Project = viewModel.createEmptyProject();
    expect(result).toEqual(expectResult);
  });
});
