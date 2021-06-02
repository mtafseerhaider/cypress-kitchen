describe('Navigation Links', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('click all links', () => {
		cy.contains('Alert').click()
		cy.location('pathname').should('eq', '/ingredients/alert')
		cy.go('back')

		cy.contains('Canvas').click()
		cy.location('pathname').should('eq', '/ingredients/canvas')
		cy.go('back')

		cy.contains('Table').click()
		cy.location('pathname').should('eq', '/ingredients/table')
		cy.go('back')
	})

	it('click all links with loop', () => {
		const pages = [
			'/ingredients/alert',
			'/ingredients/canvas',
			'/ingredients/table',
		]

		pages.forEach(page => {
			cy.contains(page).click()
			cy.location('pathname').should('eq', `/${page}`)
			cy.go('back')
		})
	})

	it('use requests to navigation bar links', () => {
		const pages = [
			'/ingredients/alert',
			'/ingredients/canvas',
			'/ingredients/table',
		]

		pages.forEach(page => {
			cy.contains(page).then(link => {
				cy.request(link.prop('href'))
			})
		})
	})

	it('check all links on page', () => {
		cy.get('a').each(page => {
			cy.request(page.prop('href'))
		})
	})

	it('check all links to sites', () => {
		cy.get("a:not([href*='mailto:'])").each(page => {
			cy.request(page.prop('href'))
		})
	})
})
