class HomePageMeenaBazar{
    getSelectDeliveryArea(){
        return cy.get('.ant-select-selection-search-input')
     }
    getSearchBox(){
       return cy.get('form.h-full:nth-child(1) > nz-input-group:nth-child(1) > input:nth-child(2)')
    }
    getLocation(){
        return cy.get('.ant-select-item-option-content')
     }
}
export default HomePageMeenaBazar