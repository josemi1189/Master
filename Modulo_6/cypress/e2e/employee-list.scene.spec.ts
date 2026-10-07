describe('Employee list scene', () => {
  let user: string;
  before(() => {
    // Login
    user = 'admin';
    const password = 'test';

    cy.visit('/');
    cy.get('input[name=user]').type(user);
    cy.get('input[name=password]').type(password);

    cy.get('button[type=submit]').click();

    cy.get('div[role=presentation]').should('exist');
    cy.get('a[href="#/employees"]').click();
    cy.hash().should('eq', '#/employees');

    // Logued ok
  });

  it('should display username in header', () => {
    // Arrange
    cy.visit('/employees');
    // Act
    cy.get('header').as('header');

    // Assert

    cy.get('@header')
      .find('h6')
      .eq(1)
      .invoke('text')
      .should((text) => {
        const regex = new RegExp(user, 'i');
        expect(text).to.match(regex);
      });
  });

  it('should display the AppLayout structure', () => {
    // Arrange
    cy.visit('/employees');
    // Act
    cy.get('header').as('header');
    cy.get('main').as('main');
    cy.get('footer').as('footer');

    // Assert
    cy.get('@header').should('exist');
    cy.get('@main').should('exist');
    cy.get('@footer').should('exist');
  });

  it.only('should display the New Employee button', () => {
    // Arrange
    cy.visit('/employees');
    // Act
    cy.get('main').as('main');

    // Assert
    cy.get('@main')
      .find('button')
      .contains(/nuevo empleado/i)
      .should('exist');
  });

  it('should confirm that it displays at least one row of data', () => {
    // Arrange
    cy.visit('/employees');
    // Act
    cy.get('main').as('main');

    // Assert
    cy.get('@main').find('table tbody tr').should('have.length.greaterThan', 1);
  });

  it('should confirm that it displays the pagination component', () => {
    // Arrange
    cy.visit('/employees');
    // Act
    cy.get('main nav[aria-label="pagination navigation"]').as(
      'paginationElement'
    );

    // Assert
    cy.get('@paginationElement').should('exist');
  });
});
