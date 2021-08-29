const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const PORT = process.env?.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("I'm Here");
});

const isParamsValid = (userInput) => {
  return true;
};

app.post("/calculate", (req, res) => {
  const userInput = req.body;
  const persons = userInput?.persons;
  const personsLen = persons.length;
  const totals = userInput?.totals;

  // if (userInput?.)

  const output = {
    persons: [],
    totals: {
      subtotals: 0,
      tipAndTax: 0,
      tipPercentage: 0,
      overall: 0,
    },
  };

  try {
    output.totals.overall = parseFloat(totals?.overall);
  } catch (err) {
    res.status(500).send("Unable to calculate overall");
    return;
  }

  for (let i = 0; i < personsLen; i++) {
    //foreach person
    const items = persons[i]?.items;
    const person = {
      id: persons[i]?.id,
      tipDollars: 0,
      tipPercentage: 0,
      subtotalBeforeTip: 0,
      subtotal: 0,
    };
    let subtotalBeforeTip = 0;

    for (let j = 0; j < items.length; j++) {
      // for each item
      try {
        subtotalBeforeTip += parseFloat(items[j]?.price);
      } catch (e) {
        res.status(500).send("Unable to calculate subtotals");
        return;
      }
    }

    person.subtotalBeforeTip = subtotalBeforeTip;
    output.totals.subtotals += subtotalBeforeTip;

    output.persons.push(person);
  }

  // Make sure to add validation if user types in wrong total overall

  output.totals.tipAndTax = output.totals.overall - output.totals.subtotals;

  output.totals.tipPercentage = (
    output.totals?.overall / output.totals?.subtotals
  ).toFixed(2);

  for (let i = 0; i < personsLen; i++) {
    // for each person
    output.persons[i].tipDollars =
      (output.persons[i]?.subtotalBeforeTip / output.totals?.subtotals) *
      output.totals.tipAndTax;

    output.persons[i].subtotal =
      output.persons[i]?.subtotalBeforeTip + output.persons[i]?.tipDollars;

    if (output.totals?.tipAndTax > 0) {
      const decimalTip =
        output.persons[i]?.tipDollars / output.totals?.tipAndTax;
      output.persons[i].tipPercentage = (decimalTip * 100).toFixed(2);
    } else {
      output.persons[i].tipPercentage = "0.00";
    }
  }

  res.json(output);
});

const determinePercentage = (input) => {
  if (!input || typeof input !== "number" || input < 0) {
    return "0.00";
  }
};

app.listen(PORT, () => {
  console.log(`Server live at port ${PORT}`);
});
