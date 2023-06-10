import generateAI from "../pageObjects/generateAI"

describe(' Generate AI Video', ()=>{


    beforeEach(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)
            generateAI.genAIHome(access.baseurl)
        })
    })

    afterEach(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)
        })
    })


    it('Verify user can create Free AI video without business email', function(){
        cy.fixture('example').then ((data) =>{
            generateAI.genAICompliment(data.assertComplimentButton)
            generateAI.genAITextArea(data.fullText)
            generateAI.genAIForm(data.fname, data.lname, data.email, data.source)
            generateAI.genAIGenerateVideo(data.assertGenerateFreeVideo)
        })
    })

    it('Verify user can not create without business email(Synthesia Demo, sales Pitch, How-To video and Learning & development', function(){
        cy.fixture('example').then ((data) =>{
            generateAI.genAISynthesiaDemo(data.assertSynthesiaButton)
            generateAI.genAITextArea(data.fullText, data.editToContinue)
            generateAI.genAIForm(data.fname, data.lname, data.email, data.source)
            generateAI.genAIBusinessEmail(data.assertBusinessEmail)
        })
    })


    it.only('Verify character count', function(){
        cy.fixture('example').then ((data) =>{
            generateAI.genAISynthesiaDemo(data.assertSynthesiaButton)
            generateAI.genAITextArea(data.fullText, data.editToContinue, data.assertCharacterCountMany, data.assertCharacterCountEqual)

        })
    })



})