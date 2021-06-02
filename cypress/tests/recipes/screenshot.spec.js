import MainPage from '../../page-objects/MainPage'

describe('Screenshot', () => {
	beforeEach(() => {
		MainPage.navigate('/ingredients/file-picker')
	})

	it('should take a screenshot', () => {
		cy.screenshot()
	})

	it('should take a screenshot after trying to upload a picture', () => {
		cy.get('#photo-upload').attachFile('images/french-toast.jpg')
		cy.get('form figure').screenshot()
	})
})
