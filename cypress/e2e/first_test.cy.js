describe("registration form page", () => {
  beforeEach(() => {
    cy.fixture('testdata.json').as('Data')
    cy.visit('https://vladimirwork.github.io/web-ui-playground/')
  })
  it('verify the page is loaded and registration form is rendering properly', function () {
    cy.viewport(1220, 900)  
      .get('input[id="1"]').should('have.attr','name', 'FirstName').type(this.Data.FirstName)
      .get('input[id="2"]').should('have.attr','name', 'LastName').type(this.Data.LastName)
      .get('input[id="3"]').should('have.attr','name', 'Email').type(this.Data.email)
      .get('input[id="4"]').should('have.attr','name', 'PhoneNumber').type(this.Data.phone)
      
      cy.log("Need to correctly define radio buttons")
      cy.get('[type="radio"]').should('have.length', 2)
      .get('form > :nth-child(10)').contains('M')
      .get('form > :nth-child(11)').contains('F')
      .get('[value="Male"]').check()

      //Changing selection on vacancy type
      cy.get('select').contains('QA Engineer').should('have.value', 'QA Engineer')  
      cy.get('select').select('QAA Engineer').should('have.value', 'QAA Engineer')
      //.wait(3000) 
      // by adding wait to this line, you may look how test will proceed in details in this phase 
      cy.get('select').select('Business Analyst').should('have.value', 'Business Analyst')
      //.wait(3000)
      cy.get('select').select('QAA Engineer').should('have.value', 'QAA Engineer')

      cy.get('input[id=myfile]').selectFile(['D:/techtaskcy/cypress/downloads/Sardor_Abdullaev_CV.pdf'])
      cy.get('label').contains( 'I agree to the processing of personal data')      
      cy.get('[type="checkbox"]').should('not.be.checked')  
      cy.get('[type="checkbox"]').check()
      cy.get('[type="checkbox"]').should('be.checked')
      cy.get('[name="submitbutton"]').click()
      cy.on('console:alert', (str) => { 
        expect(str.trim()).to.eq('{"FirstName":"Sardor","LastName":"Abdullaev","Email":"nick99223@gmail.com","PhoneNumber":"998946462288","Gender":"Male","Vacancy":"QAA Engineer","CV":{},"Agreement":"true"}')} 


  )})
})