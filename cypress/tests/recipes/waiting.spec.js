describe('Search for books', () => {
	beforeEach(() => {
		cy.visit('https://automationbookstore.dev/')
	})

	it('should return one book', () => {
		cy.get('#searchBar').type('testing')

		expect(cy.get('li.ui-screen-hidden').its('length')).to.not.equal(0)

		cy.get('li:not(.ui-screen-hidden)').should('have.length', 1)
	})
})
