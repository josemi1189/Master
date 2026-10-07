import { only } from 'node:test';
import React from 'react';
describe('Login scene test', () => {
  it('should display div of Centered Layout', () => {
    // Arrange

    // Act
    cy.visit('/');

    // Assert
    cy.get('[data-testid=login-container]');
  });

  it('should have focus when you click the user input', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name=user]').click();

    // Assert
    cy.focused().should('have.attr', 'name', 'user');
  });

  it('should have focus when you click the password input', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.get('input[name=password]').click();

    // Assert
    cy.focused().should('have.attr', 'name', 'password');
  });

  it('should display a loading spinner when the credentials are correct and it redirects to /submodule-list', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.get('input[name=user]').type(user);
    cy.get('input[name=password]').type(password);

    cy.get('button[type=submit]').click();

    // Assert
    cy.get('div[role=presentation]').should('exist');
    cy.hash().should('eq', '#/submodule-list');
  });

  it('should display an error message with incorrect credentials', () => {
    // Arrange
    //Act
    cy.visit('/');
    cy.get('input[name=user]').as('userInput');
    cy.get('input[name=password]').as('passwordInput');

    cy.get('@userInput').type('prueba');
    cy.get('@passwordInput').type('prueba');
    cy.get('button[type=submit]').click();

    //Assert
    cy.get('div[role=alert]').should('exist');
  });
});
