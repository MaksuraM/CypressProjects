import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport'
import HomePageMeenaBazar from "../PageObjects/HomePageMeenaBazar";
const homePageMeenaBazar = new HomePageMeenaBazar()
Given('I open MeenaBazar Home Page',function(){
  cy.visit("https://meenabazaronline.com/")
})
When('I enter location and submit location',function () {
  homePageMeenaBazar.getSelectDeliveryArea().type('Dhanmondi 10 A',{ force: true });
  cy.wait(10000)
  homePageMeenaBazar.getLocation().contains('Dhanmondi 10 A').click();

})
Then('I search product',function(){
  cy.wait(10000)
  homePageMeenaBazar.getSearchBox().type('${this.data.product}{enter}', { parseSpecialCharSequences: false });
  })