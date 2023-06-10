import locators from "./locators"

const genAIHome = (baseurl) =>{
    cy.url().should('include',baseurl)
    cy.wait(5000)
    cy.get(locators.genAIHome).click()
}

const genAISynthesiaDemo = (assertSynthesiaButton) =>{
    cy.get(locators.synthesiaDemo).click()
    cy.get(locators.synthesiaDemo).contains(assertSynthesiaButton)
}

const genAICompliment = (assertComplimentButton) =>{
    cy.get(locators.compliment).click()
    cy.get(locators.compliment).contains(assertComplimentButton)
}

const genAITextArea = (fullText) =>{
    cy.get(locators.typeScript).click()
    cy.get(locators.typeScript).clear()
    cy.get(locators.typeScript).type(fullText)

    cy.get(locators.typeScript).invoke('val').then((textAreaValue) =>{
        const charCount = textAreaValue.length
        const maxCharCount = 200
        const assertCharacterCountMany = 'characters too many'
        const assertCharacterCountEqual = 'No more characters left'
        if (charCount > maxCharCount) {
            cy.log(charCount)
            cy.get(locators.scriptCharCount).should('include.text', assertCharacterCountMany)
            cy.get(locators.editToContinueButton).should('not.be.enabled')
            cy.log('Excecuting IF block')
            
          }  else if (charCount === maxCharCount){
            cy.get(locators.scriptCharCount).should('include.text', assertCharacterCountEqual)
            cy.get(locators.continueButton).click()

          }
          else {
            cy.get(locators.continueButton).click()
           
          }
    })
}     

const genAIForm = (fname, lname, email, leadSource) =>{
    cy.wait(10000)
    cy.get(locators.fname).click()
        .type(fname)
    cy.get(locators.lname).click()
        .type(lname)
    cy.get(locators.email).click()
        .type(email)
    cy.get(locators.leadSource).select(leadSource)
    cy.get(locators.guidelines).click()

}

const genAIGenerateVideo = (assertGenerateFreeVideo) =>{
    cy.get(locators.generateVideoButton).click()
    cy.get(locators.generateVideoButton).contains(assertGenerateFreeVideo)
}

const genAIBusinessEmail = (assertBusinessEmail) =>{

    cy.get(locators.generateVideoButton).should('be.visible')
    cy.get(locators.generateVideoButton).should('have.value', assertBusinessEmail)
    cy.get(locators.generateVideoButton).should('not.be.enabled')
}


export default{
    // home
    genAIHome,
    genAISynthesiaDemo,
    genAICompliment,
    genAITextArea,
    genAIForm,
    genAIGenerateVideo,
    genAIBusinessEmail
    
}