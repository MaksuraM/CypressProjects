import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport'
import HomePage from "../PageObjects/HomePage";
import ProductPage from "../PageObjects/ProductPage"
import PurchasePage from '../PageObjects/PurchasePage'
const homePage = new HomePage()
const productPage = new ProductPage()
const purchasePage = new PurchasePage()
let name
Given('I open Ecommerce Home Page',function(){
  cy.visit(Cypress.env('url')+"/angularpractice/")
})
Given('I open Ecommerce Page',function(){
  cy.visit(Cypress.env('url')+"/angularpractice/shop")
})
When('I add items to the cart',function () {
  homePage.getShopTabOpen().click()
  this.data.productName.forEach((element) =>{ 
  cy.selectProduct(element)
})
  productPage.getCheckOut().click()
})
When('I  fill up the form',function (DataTable) {
  name=DataTable.rawTable[1][0]
  homePage.getNameEditBox().type(DataTable.rawTable[1][0])
  homePage.getGender().select(DataTable.rawTable[1][1])
})
Then('Validate the total price, Select the country submit and verify thank you',function(){
  let sum = 0; // Initialize sum with the initial value of 0
       productPage.getPriceButton().each(($e1, index, $list) => {            
            let text1=$e1.text()
            let length=$list.length
            text1=text1.split(" ")
            text1=parseInt(text1[1].trim())
            cy.log("text1 "+text1)
            sum += text1; // Add the current text1 to sum
           if(index==3){
             cy.log("sum: "+sum);
       }
       let text= productPage.getGrandTotalButton().then((text2)=>{
        text2=text2.text()
        text2=text2.split(" ")
        text2=parseInt(text2[1].trim())
        expect(text2).to.equal(sum)
      })
         })
  productPage.getProceedCheckout()
  purchasePage.getCountryBox().type('an')
  cy.wait(7000)
  purchasePage.getClickSuggestion().contains('Bangladesh').click()
  purchasePage.getCheckbox().click()
  purchasePage.getPurchaseButton().click()
  purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
})
Then('verify some parameters',function(){
  homePage.getTwoWayDataBinding().should('have.value',name)
  homePage.getNameEditBox().should('have.attr','minlength','2')
  homePage.getEnterpreneaurRadioButton().should('be.disabled')
})