describe("Core Calculation E2E Functionality", () => {
  beforeEach("go to the website", () => {
    cy.visit("/");
  });

  it("user can modify and calculate placeholder person", () => {
    const person = {
      name: "Mike",
      item1Name: "French Fries",
      item2Name: "Pizza",
      item1Price: "$10.00",
      item2Price: "$23.99",
      userSubtotal: "$33.99",
      userTipAndTaxExpected: "$11.00",
      userTotalDueExpected: "$44.99",
      eventTotal: "$44.99",
      eventTotalTipAndTaxExpected: "$11.00",
    };

    // Edit names
    cy.findByTitle(/edit person 1/i).click();

    cy.findByRole("textbox", { name: /person 1 name/i })
      .clear()
      .type(person.name);
    cy.findByRole("textbox", { name: /item 1 name/i })
      .clear()
      .type(person.item1Name);
    cy.findByRole("textbox", { name: /item 2 name/i })
      .clear()
      .type(person.item2Name);

    // Edit item prices
    cy.findByRole("textbox", { name: /item 1 price/i })
      .clear()
      .type(person.item1Price);
    cy.findByRole("textbox", { name: /item 2 price/i })
      .clear()
      .type(person.item2Price);

    cy.findByTitle(/stop editing person 1/i).click();

    // Edit event total
    cy.findByTitle(/edit event total/i).click();
    cy.findByRole("textbox", { name: /event total price/i })
      .clear()
      .type(person.eventTotal);
    cy.findByTitle(/stop editing event total/i).click();

    // Verify data is on screen correctly
    cy.get(`[data-cy="${person.name}-personName"]`).then($value => {
      expect($value.text()).to.equal(person.name);
    });

    cy.get("[data-cy='eventTotal']").then($value => {
      expect($value.text()).to.equal(person.eventTotal);
    });
    cy.get(`[data-cy="${person.item1Name}-itemName"]`).then($value => {
      expect($value.text()).to.equal(person.item1Name);
    });
    cy.get(`[data-cy="${person.item2Name}-itemName"]`).then($value => {
      expect($value.text()).to.equal(person.item2Name);
    });

    cy.get(`[data-cy="${person.item1Name}-itemPrice"]`).then($value => {
      expect($value.text()).to.equal(person.item1Price);
    });
    cy.get(`[data-cy="${person.item2Name}-itemPrice"]`).then($value => {
      expect($value.text()).to.equal(person.item2Price);
    });

    // Verify event calculations
    cy.get("[data-cy='eventTotalTipAndTax']").then($value => {
      expect($value.text()).to.equal(person.eventTotalTipAndTaxExpected);
    });

    // Verify person calculations
    cy.get(`[data-cy="${person.name}-tipAndTax"]`).then($value => {
      expect($value.text()).to.equal(person.userTipAndTaxExpected);
    });
    cy.get(`[data-cy="${person.name}-totalDue"]`).then($value => {
      expect($value.text()).to.equal(person.userTotalDueExpected);
    });
  });
});
