describe("Core Calculation E2E Functionality", () => {
  const editEventTotal = (total: string) => {
    cy.findByTitle(/edit event total/i).click();
    cy.findByRole("spinbutton", { name: /event total price/i })
      .clear()
      .type(total);
    cy.findByTitle(/stop editing event total/i).click();
  };

  const addNewPerson = () => {
    cy.findByRole("button", { name: /add person/i }).click();
  };

  const verifyEventTotal = (expectedTotal: string) => {
    cy.get("[data-cy='eventTotal']").then($value => {
      expect($value.text()).to.equal(expectedTotal);
    });
  };

  const verifyEventTipAndTax = (expectedTotal: string) => {
    cy.get("[data-cy='eventTotalTipAndTax']").then($value => {
      expect($value.text()).to.equal(expectedTotal);
    });
  };

  const editInputField = (
    title: RegExp,
    data: string,
    { role }: { role: string },
  ) => {
    cy.findByRole(role, { name: title }).clear().type(data);
  };

  const toggleEditPerson = (title: RegExp) => {
    cy.findByTitle(title).click();
  };

  const verifyItemPrice = (name: string, expectedTotal: string) => {
    cy.get(`[data-cy="${name}-itemPrice"]`).then($value => {
      expect($value.text()).to.equal(expectedTotal);
    });
  };

  const verifyItemName = (expectedName: string) => {
    cy.get(`[data-cy="${expectedName}-itemName"]`).then($value => {
      expect($value.text()).to.equal(expectedName);
    });
  };

  const verifyPersonTipAndTax = (name: string, expectedTotal: string) => {
    cy.get(`[data-cy="${name}-tipAndTax"]`).then($value => {
      expect($value.text()).to.equal(expectedTotal);
    });
  };

  const verifyPersonTotalDue = (name: string, expectedTotal: string) => {
    cy.get(`[data-cy="${name}-totalDue"]`).then($value => {
      expect($value.text()).to.equal(expectedTotal);
    });
  };

  const verifyPersonName = (name: string) => {
    cy.get(`[data-cy="${name}-personName"]`).then($value => {
      expect($value.text()).to.equal(name);
    });
  };

  const global = {
    person: {
      name: "Mike",
      item1Name: "French Fries",
      item2Name: "Pizza",
      item1Price: "$10.00",
      item2Price: "$23.99",
      tipAndTaxExpected: "$11.00",
      totalDueExpected: "$44.99",
    },
    event: {
      eventTotal: "$44.99",
      eventTotalTipAndTaxExpected: "$11.00",
    },
  };

  beforeEach("go to the website", () => {
    cy.visit("/");

    toggleEditPerson(/edit person 1/i);

    editInputField(/person 1 name/i, global.person.name, {
      role: "textbox",
    });

    editInputField(/item 1 name/i, global.person.item1Name, {
      role: "textbox",
    });
    editInputField(/item 2 name/i, global.person.item2Name, {
      role: "textbox",
    });

    editInputField(/item 1 price/i, global.person.item1Price, {
      role: "spinbutton",
    });
    editInputField(/item 2 price/i, global.person.item2Price, {
      role: "spinbutton",
    });

    toggleEditPerson(/stop editing person 1/i);

    editEventTotal(global.event.eventTotal);

    verifyPersonName(global.person.name);
    verifyEventTotal(global.event.eventTotal);
    verifyItemName(global.person.item1Name);
    verifyItemName(global.person.item2Name);
    verifyItemPrice(global.person.item1Name, global.person.item1Price);
    verifyItemPrice(global.person.item2Name, global.person.item2Price);
    verifyEventTipAndTax(global.event.eventTotalTipAndTaxExpected);
    verifyPersonTipAndTax(global.person.name, global.person.tipAndTaxExpected);
    verifyPersonTotalDue(global.person.name, global.person.totalDueExpected);
  });

  it("user can add and calculate a second person", () => {
    const local = {
      person: {
        name: "Terry",
        item1Name: "Ice Cream",
        item1Price: "$10.00",
        tipAndTaxExpected: "$1.98",
        totalDueExpected: "$11.98",
      },
      event: {
        total: "$52.68",
        expectedTipAndTax: "$8.69",
      },
      updatedPerson1: {
        tipAndTaxExpected: "$6.71",
        totalDueExpected: "$40.70",
      },
    };

    addNewPerson();
    editEventTotal(local.event.total);

    toggleEditPerson(/edit person 2/i);
    editInputField(/person 2 name/i, local.person.name, {
      role: "textbox",
    });
    editInputField(/item 3 name/i, local.person.item1Name, {
      role: "textbox",
    });
    editInputField(/item 3 price/i, local.person.item1Price, {
      role: "spinbutton",
    });
    toggleEditPerson(/stop editing person 2/i);

    verifyPersonName(local.person.name);
    verifyItemName(local.person.item1Name);
    verifyItemPrice(local.person.item1Name, local.person.item1Price);
    verifyPersonTipAndTax(local.person.name, local.person.tipAndTaxExpected);
    verifyPersonTotalDue(local.person.name, local.person.totalDueExpected);
    verifyPersonTipAndTax(
      global.person.name,
      local.updatedPerson1.tipAndTaxExpected,
    );
    verifyPersonTotalDue(
      global.person.name,
      local.updatedPerson1.totalDueExpected,
    );
    verifyEventTotal(local.event.total);
    verifyEventTipAndTax(local.event.expectedTipAndTax);
  });
});
