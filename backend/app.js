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

const DEMO_INPUT_DATA = {
  persons: [
    {
      id: 1245,
      items: [
        {
          price: 12.0,
        },
      ],
    },
  ],
  total: 12.0,
};

const DEMO_OUTPUT_DATA = {
  persons: [
    {
      id: 1245,
      items: [
        {
          price: 12.0,
        },
      ],
      tipDollars: 0,
      tipPercentage: 0,
      subtotalBeforeTip: 12.0,
      subtotal: 12.0,
    },
  ],

  totals: {
    tipAndTax: 12.0,
    tipPercentage: 0,
    overall: 12.0,
  },
};

class Calculation {
  constructor(options) {
    this.totals = {
      tipAndTax: options.totals.tipAndTax || 0,
      tipPercentage: options.totals.tipPercentage || 0,
      overall: options.totals.overall || 0,
    };
  }
}

app.post("/calculate", (req, res) => {
  const userInput = req.body;
  const persons = userInput?.persons;
  // if (userInput?.)

  // persons array
  // for each person loop each food item

  const output = new Calculation();

  for (let personIndex = 0; personIndex < persons.length; personIndex++) {
    const items = person?.items;

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      try {
        subtotalBeforeTip += parseFloat(items[itemIndex]?.price);
      } catch (e) {
        res.status(500).send("Unable to calculate subtotals");
        return;
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server live at port ${PORT}`);
});
