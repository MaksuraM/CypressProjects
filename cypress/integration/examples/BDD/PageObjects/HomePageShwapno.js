class HomePageShwapno{
    getPopUp(){
        return cy.get('<div class="flex min-h-full items-center justify-center p-4 text-center">...</div>')
     }
    getLocationBox(){
       return cy.get('#cdk-overlay-0 > nz-modal-container > div > div > div.ant-modal-body.ng-tns-c8-2 > app-area-box > nz-select > nz-select-top-control > nz-select-search > input')
    }
    getDistrict(){
        return cy.get('#select2-example1-container')
    }
    getArea(){
        return cy.get('#select2-o1k6-container')
    }
    getLocationSubmitButton(){
        return cy.get('#storeSubmit')
    }
}
export default HomePageShwapno