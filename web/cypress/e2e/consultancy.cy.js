describe('Formulário de Consultoria', () => { 

    it('Deve solicitar consultoria individual', () => { 
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goto('Formulários', 'Consultoria')

        cy.get('#name').type('Gilberto Junior')
        cy.get('#email').type('gilberto.junior1108@gmail.com')
        
    })

})

