import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport'
import HomePageShwapno from "../PageObjects/HomePageShwapno";
const homePageShwapno = new HomePageShwapno()
Given('I open Shawpno Home Page',function(){
  cy.visit("https://meenabazaronline.com/")
})
When('I enter location',function () {
  homePageShwapno.getLocationBox().type('Dhanmondi 10A{enter}');
  //homePageShwapno.getLocationBox().click()
  //homePageShwapno.getDistrict().click()
  //cy.get('#id04 > div > div > div.col-md-12 > img').click()
  //homePageShwapno.getDistrict().select(this.data.district); 
  //homePageShwapno.getArea().click()
  //homePageShwapno.getArea().select(this.data.area);
})
Then('Submit location',function(){
  //HomePageShwapno.getLocationSubmitButton().click()
  })