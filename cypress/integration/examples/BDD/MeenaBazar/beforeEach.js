beforeEach(function(){
    // execute this task every time before executing a TC




    cy.fixture('example').then(function(data){
      this.data=data
    })
    });