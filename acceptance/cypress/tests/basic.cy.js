context("Basic Acceptance Tests", () => {
  describe("Quote Block Tests", () => {
    beforeEach(() => {
      cy.intercept("GET", `/**/*?expand*`).as("content");
      cy.intercept("GET", "/**/Document").as("schema");

      // given a logged in editor and a page in edit mode
      cy.autologin();
      cy.createContent({
        contentType: "Image",
        contentId: "my-image",
        contentTitle: "My Image",
      });
      cy.visit("/");
      cy.wait("@content");
    });

    it("As editor I can add a page with a quote block", function () {
      // when I add a page with a quote block
      cy.get("#toolbar-add").click();
      cy.get("#toolbar-add-document").click();
      cy.get(".documentFirstHeading")
        .type("My Page")
        .get(".documentFirstHeading")
        .contains("My Page");

      cy.get('[aria-multiline="false"] > p').click();
      cy.get(".text-slate-editor-inner > .ui > .icon").click();
      cy.get('[aria-label="Unfold Text blocks"]').click();
      cy.get(
        '[style="transition: opacity 500ms ease 0ms;"] > :nth-child(3) > .ui'
      ).click();
      cy.get(".block-editor-quote .text-slate-editor-inner .slate-editor p")
        .click()
        .type(
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        );
      cy.get("#field-name").click();
      cy.get("#field-name").type("Quotator");
      cy.get("#field-additional_information").click();
      cy.get("#field-additional_information").type("Position and/or Date");

      cy.get("#toolbar-save").click();
    });

    it("As editor I can add an image to a quote block", function () {
      // when I add a page with a quote block with an image
      cy.get("#toolbar-add").click();
      cy.get("#toolbar-add-document").click();
      cy.get(".documentFirstHeading")
        .type("My Page")
        .get(".documentFirstHeading")
        .contains("My Page");

      cy.get('[aria-multiline="false"] > p').click();
      cy.get(".text-slate-editor-inner > .ui > .icon").click();
      cy.get('[aria-label="Unfold Text blocks"]').click();
      cy.get(
        '[style="transition: opacity 500ms ease 0ms;"] > :nth-child(3) > .ui'
      ).click();
      cy.get(".block-editor-quote .text-slate-editor-inner .slate-editor p")
        .click()
        .type(
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        );
      cy.get("#field-name").click();
      cy.get("#field-name").type("Quotator");
      cy.get("#field-additional_information").click();
      cy.get("#field-additional_information").type("Position and/or Date");
      cy.get(
        "#blockform-fieldset-default > .segment > .text > .grid > .stretched > .eight > .objectbrowser-field > .ui > .icon"
      ).click();
      cy.get('[title="/my-image (Image)"]').dblclick();

      cy.get("#toolbar-save").click();
    });
  });
});
