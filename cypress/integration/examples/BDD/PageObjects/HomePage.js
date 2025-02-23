class HomePage{
    getNameEditBox(){
       return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender(){
        return cy.get('select')
    }
    getEnterpreneaurRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getEmployedRadioButton(){
        return cy.get('#inlineRadio2')
    }
    getStudentRadioButton(){
        return cy.get('#inlineRadio1')
    }
    getShopTabOpen(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default HomePage