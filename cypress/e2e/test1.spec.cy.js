describe('HSBC ATM Search Test Scenario:', () => {
  it('passes', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.scrollTo("bottom")
    cy.get('[class="footer-large-item lg-3"]').contains('Find your nearest HSBC branch or ATM ',{timeout:6000}).type('{enter}',{force: true})
    cy.url().should('include','/ways-to-bank/branches/')
    cy.get('[class="A-TYP38L-RW-ALL text-container text "]')
    cy.contains('Branches & ATMs')
    cy.get('[class="A-BTNP-RW-ALL"]').click()
    cy.wait(7000)

//Type country name as India
   cy.get('#searchInput').type('India')
   cy.wait(4000)
    cy.get("#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc").each(($el, index, $list) => {

      cy.log($el.text())
      if($el.text() === 'India'){
        
        cy.wrap($el).click();
      }
      
    })
    cy.get('[class="uItFVQvJsoQVBXhG5ERC"]').should('contain.text','Rajbhavan Road')
    cy.get('[class="A-BTN dyDtMFJhIxIve49jQf34 F2AanyfgyiGzuY7KkfBN"]').click({force: true})
    cy.get('[class="mPJtUlFpHpAioQtHYTUY"]').should('have.css','background-color','rgba(0, 0, 0, 0)')
    cy.get('[class="social-image social-icon-instagram"]').should('be.visible')
    cy.get('[class="social-image social-icon-facebook"]').should('be.visible')
    cy.get('[class="social-image social-icon-twitter"]').should('be.visible')
    cy.get('[class="social-image social-icon-youtube"]').should('be.visible')
    cy.get('[class="header-logo lg-2"]').click()
    cy.url().should('eq','https://www.hsbc.co.in/')
    cy.scrollTo('bottom')
    cy.contains('Privacy Statement').click({force: true})
    cy.contains('Privacy and security information for the HSBC website')


  })
})