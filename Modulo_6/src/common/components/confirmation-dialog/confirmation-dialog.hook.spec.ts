import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '#common/models';

describe('/src/common/components/confirmation-dialog/confirmation-dialog.hook.ts', () => {
  describe('useConfirmationDialog', () => {
    it('should initialize with isOpen as false', () => {
      //Arrange

      // Act
      const { result } = renderHook(() => useConfirmationDialog());

      // Assert
      expect(result.current.isOpen).toBe(false);
    });

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
  });
});
