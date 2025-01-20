describe('CheckOut', () =>{
    
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/Sign In')
         }
        )
        
    it('Add to Cart and Checkout', () => {
        cy.get('.category-product__image').first().click()
        cy.get('.action.tocart.primary').click()
        cy.get('.message-success').should('be.visible')
        cy.get('.minicart-wrapper').click()
        cy.get('.action.primary.checkout').click()
        cy.get('#shipping-address-form').within(() => {
        cy.get('#shipping-address-firstname').type('try')
        cy.get('#shipping-address-lastname').type('123') //
        cy.get('#shipping-address-street1').type('Jalan Pancasila') 
        cy.get('#shipping-address-city').type('Montgomery') 
        cy.get('#shipping-address-postcode').type('36043') 
        cy.get('#shipping-address-telephone').type('08810023') 
        cy.get('#shipping-address-country_id').select('Alabama') 
        cy.get('#shipping-address-region_id').select('United States') 
        })
        cy.get('.button').contains('Next').click()
        cy.get('.shipping-method-item').first().click() 
        cy.get('.button').contains('Next').click()
        cy.get('#payment-method-checkmo').click() 
        cy.get('.button').contains('Next').click()
        cy.get('.button').contains('Place Order').click()
        cy.url().should('include', 'checkout/onepage/success')
        cy.get('.page-title').should('contain', 'Thank you for your purchase!')

    } )

})