import { useState } from "react";
import Greeting from "./Greeting/Greeting";
import "./InputView.css";
import { checkStr } from "../../utilities/error";
import { sanitizeStr } from "../../utilities/sanitize";

interface PersonItems {
  price: string;
}

interface Person {
  id: string;
  items: PersonItems[];
}

interface TipsyForm {
  eventName: string;
  persons: Person[];
  totals: {
    overall: string;
  };
}

const initFormData: TipsyForm = Object.freeze({
  eventName: "",
  totals: {
    overall: "$0.00",
  },
  persons: [
    {
      id: "",
      items: [{ price: "0.00" }],
    },
  ],
});

const initFormPersonData: Person = Object.freeze({
  id: "Mike",
  items: [
    {
      price: "0.00",
    },
    {
      price: "120.00",
    },
  ],
});

function InputView() {
  // Consider https://www.npmjs.com/package/react-toastify ?

  const [formData, updateFormData] = useState(initFormData);
  const [formPersons, updateFormPersons] = useState([initFormPersonData]);

  const getPersonIndex = (id: string): number => {
    const indexOfPerson: number = formData.persons.findIndex((person) => {
      person.id === id;
    });
    return indexOfPerson ? indexOfPerson : -1;
  };

  const addSinglePersonItem = (id: string, price: string) => {
    // need to consider adding an item vs the handleChange function
    // this function won't work directly from the event changes in its current form
    // we may use this as a helper function i guess somehow need to figure out the ID of the
    // person it is related too (we may need to make a function to generate person code blocks with TSX)

    const payloadId: string = sanitizeStr(id);

    const payloadPrice: string = sanitizeStr(id);

    const index = getPersonIndex(payloadId);
    if (index === -1) throw new Error("Unable to find index of person");

    const persons: Person[] = [...formData.persons];
    let person: Person = { ...persons[index] };

    person.items = [...person.items, { price: payloadPrice }];

    persons[index] = person;

    updateFormData((prev) => ({
      ...prev,
      persons,
    }));
  };

  const handleNewPerson = (e: any) => {
    const payload: string = sanitizeStr(e.target.value);

    updateFormData((prev) => ({
      ...prev,
      persons: [
        ...formData.persons,
        {
          id: payload,
          items: [],
        },
      ],
    }));
  };

  const handleTotalsChange = (e: any) => {
    const payload: string = sanitizeStr(e.target.value);

    updateFormData((prev) => ({
      ...prev,
      [e.target.name]: { ...formData.totals, overall: payload },
    }));
  };

  const handleChange = (e: any) => {
    const payload: string = sanitizeStr(e.target.value);

    updateFormData((prev) => ({
      ...prev,
      [e.target.name]: payload,
    }));
  };

  const handleSubmit = (e: any) => {
    e = e || window.event;
    e.preventDefault();
    console.log(formData);
    throw new Error("Hello");
    updateFormData(initFormData);
    e.target.reset();
  };
  return (
    <div className="input-view">
      <Greeting />

      {/* <form onSubmit={handleSubmit}> */}
      {/* <div className="question">
          <h2>What was the name of the event?</h2>
          <label>Event name</label>
          <input
            type="text"
            name="eventName"
            required
            onChange={handleChange}
          />
        </div> */}

      {/* <div className="question">
          <h2>What was the final total amount?</h2>
          <small>Ensure this includes the tip and tax.</small>
          <label>Final total</label>
          <input
            type="text"
            name="totals"
            required
            onChange={handleTotalsChange}
          />
        </div> */}

      {/* <div className="question">
          <h2>Let's add people</h2>
          <label>Person name</label>
          <input type="text" name="person" required onChange={addPerson} />
        </div> */}

      {/* <div className="question">
          <h2>Price of item</h2>
          <label>Person name</label>
          <input
            type="text"
            name="price"
            required
            onChange={addSinglePersonItem}
          />
        </div>

        <button>Add person</button>
        <button>Add item</button>
        <button type="submit">Calculate</button>
      </form> */}

      <form onSubmit={handleSubmit}>
        <h2>My special form</h2>

        {formPersons.map((element, index) => {
          return (
            <div className="question" key={index}>
              <div className="person-id-container">
                <label>Person name {index} </label>
                <input type="text" name="id" value={element.id || ""} />
              </div>
              {element.items.map((element, index) => {
                return (
                  <h1 key={index}>
                    item:{element.price} {index}
                    {index ? (
                      <button
                        type="button"
                        className="button remove"
                        onClick={() => alert(`removed item ${index}`)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </h1>
                );
              })}
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default InputView;
