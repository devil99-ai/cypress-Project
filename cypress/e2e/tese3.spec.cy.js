describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.hsbc.co.in/')

    //Scroll down to the bottom of the page
    cy.scrollTo('bottomLeft')

    //Click on Find your nearest branch or ATM link in footer section
    cy.get("[href='/ways-to-bank/branches/']").contains('Find your nearest HSBC branch or ATM').click({force:true})

    //Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url().should('include','/ways-to-bank/branches/')

    //Validate Header as Branches & ATM
    cy.get("[class='A-PNL-RW-ALL']").contains('Branches & ATMs')

    //Click on before Branch & ATM Locator button
    cy.get("[class='A-BTNP-RW-ALL']").click()

    cy.wait(7000)

//Type country name as India
   cy.get('#searchInput').type('India')
   cy.wait(4000)
//In drop-down option click option India
   cy.get("#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc").each(($el, index, $list) => {

    cy.log($el.text())
    if($el.text() === 'India'){
      
      cy.wrap($el).click();
    }
    
  })
  //Validate ATM Header name is showing as Rajbhavan Road
cy.get("[class='uItFVQvJsoQVBXhG5ERC']").should('contain.text','Rajbhavan Road')

//Click on add Show more results button
cy.get("[class='A-BTN _3ONnGxq1xmZZ3J68sha5PJ _3VOnY-qV7atMV73oAncmTd']").contains('Show more results').click()

//Check second ATM branch name tooltip as 2 in red color is getting displayed
//cy.get("[class='_1OVu0dKjGeodXsBo3rrQ-i']").should('have.css', 'background-color', '#db0011')
cy.get("li:nth-child(2) button:nth-child(1) p:nth-child(1) span:nth-child(1) span:nth-child(1)").should('be.visible')

  cy.scrollTo('bottomRight')
  
  //Check Instagram in social media option in footer section
  cy.get("[class='social-image social-icon-instagram']").should('be.visible')
 
  //Check Facebook in social media option in footer section
  cy.get("[class='social-image social-icon-facebook']").should('be.visible')
  
  //Check Twitter in social media option in footer section
  cy.get("[class='social-image social-icon-twitter']").should('be.visible')
  
  //Check Youtube in social media option in footer section
  cy.get("[class='social-image social-icon-youtube']").should('be.visible')

  cy.scrollTo('topLeft')
  cy.wait(3000)

  //Click on HSBC Logo
  cy.get("[class='header-logo lg-2']").should('exist').click();
  
  //Validate page is navigating to home page by its title
  cy.url().should('eq','https://www.hsbc.co.in/');

  //Scroll down to the bottom 
  cy.scrollTo('bottomLeft')

   //Check and Click on Privacy link
  cy.get("[class='footer-supplementary-item']").contains('Privacy Statement').click({force:true});

  //Validate Privacy Statement as Header
  //cy.get("h1[class='A-TYP48T-RW-ALL text-container text']").should('contain.text','Privacy Statement')
  cy.get('.A-TYP48T-RW-ALL.text-container.text').should('contain.text','Privacy Statement')
  })
})