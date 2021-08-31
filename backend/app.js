const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const PORT = process.env?.PORT || 3002;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("I'm Here");
});

const validInput = (userInput) => {
  if (!userInput || !userInput?.persons || !userInput?.totals) return false;

  const overall = userInput?.totals?.overall;
  if (!overall || typeof overall !== "number") return false;

  const id = userInput?.persons[0]?.id;
  if (!id) return false;

  return true;
};

app.post("/calculate", (req, res) => {
  const userInput = req.body;

  if (!validInput(userInput)) {
    res.status(400).send("Invalid user input");
    return;
  }

  const persons = userInput?.persons;
  const personsLen = persons.length;
  const totals = userInput?.totals;

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

  output.totals.tipAndTax = output.totals.overall - output.totals.subtotals;

  // Make sure to add validation if user types in wrong total overall
  if (
    output.totals.tipAndTax < 0 ||
    output.totals.subtotals + output.totals.tipAndTax !== totals.overall
  ) {
    // user provided wrong overall
    res.status(400).send("Totals do not match, please check your input");
  }

  const totalDecimalTip = output.totals?.overall / output.totals?.subtotals - 1;
  output.totals.tipPercentage = (totalDecimalTip * 100).toFixed(2);

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

app.listen(PORT, () => {
  console.log(`Server live at port ${PORT}`);
});

module.exports = {
  validInput,
};
