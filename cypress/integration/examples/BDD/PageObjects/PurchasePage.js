class PurchasePage{
    getPurchaseButton(){
        return cy.get('form.ng-untouched > .btn')
    }
    getCountryBox(){
        return cy.get('#country')
    }
    getClickSuggestion(){
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckbox(){
        return cy.get('.checkbox > label')
    }
    getMessage(){
        return cy.get('.alert')
    }
    }
export default PurchasePage