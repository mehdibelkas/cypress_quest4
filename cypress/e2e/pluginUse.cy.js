///<reference types= "Cypress" />
describe('Quest4', () => {
  it('upload image', () => {
    cy.visit("https://filebin.net/");
    cy.get("#fileField")
      .attachFile("cat-551554__480.jpg");
      cy.contains("It contains 1 uploaded file").should("be.visible");
      cy.contains("Download files").click();
      cy.contains("Tar")
        .invoke("attr", "href")
        .then((downloadLink) => {
          const absulteLink = "https://filebin.net/" + downloadLink;
          cy.log(downloadLink);
          cy.downloadFile(
            absulteLink,
            "mydownloads/tarFiles",
            "downloadedFromCypress.tar"
          );
          cy.readFile("mydownloads/tarFiles/downloadedFromCypress.tar");

  })})
      
      
          });
      
    