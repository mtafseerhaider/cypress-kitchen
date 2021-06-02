import MainPage from '../../page-objects/MainPage'

describe('iFrame', () => {
	beforeEach(() => {
		MainPage.navigate('/ingredients/iframe')
	})

	it('should find a table in the iframe', () => {
		cy.get('#the-kitchen-table')
			.its('0.contentDocument')
			.its('body')
			.then(cy.wrap)
			.find('#fruits-vegetables')
			.should('be.visible')
	})
})
