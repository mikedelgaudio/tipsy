import { useState } from "react";
import Greeting from "./Greeting/Greeting";
import "./InputView.css";
import { checkStr } from "../../utilities/error";

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
  persons: [],
});

function InputView() {
  // TODO make error handling functions

  const [formData, updateFormData] = useState(initFormData);

  const addSinglePersonItem = (id: string, price: string) => {
    checkStr(id);
    checkStr(price);
    let persons: Person[] = [...formData.persons];
    const indexOfPerson: number = persons.findIndex((person) => {
      person.id === id;
    });
    let person: Person = { ...persons[indexOfPerson] };

    person.items.push({
      price,
    });

    persons[indexOfPerson] = person;

    updateFormData((prev) => ({
      ...prev,
      persons,
    }));
  };

  const addPerson = (id: string) => {
    checkStr(id);
    updateFormData((prev) => ({
      ...prev,
      persons: [
        ...formData.persons,
        {
          id,
          items: [],
        },
      ],
    }));
  };

  const handleTotalsChange = (e: any) => {
    let payload: string = e.target.value.trim();
    checkStr(payload);
    updateFormData((prev) => ({
      ...prev,
      [e.target.name]: { ...formData.totals, overall: payload },
    }));
  };

  const handleChange = (e: any) => {
    updateFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e: any) => {
    e = e || window.event;
    e.preventDefault();
    console.log(formData);
    updateFormData(initFormData);
    e.target.reset();
  };
  return (
    <div className="input-view">
      <Greeting />

      <form onSubmit={handleSubmit}>
        <div className="question">
          <h2>What was the name of the event?</h2>
          <label>Event name</label>
          <input
            type="text"
            name="eventName"
            required
            onChange={handleChange}
          />
        </div>

        <div className="question">
          <h2>What was the final total amount?</h2>
          <small>Ensure this includes the tip and tax.</small>
          <label>Final total</label>
          <input
            type="text"
            name="totals"
            required
            onChange={handleTotalsChange}
          />
        </div>

        <div className="question">
          <h2>Let's add people</h2>
          <label>Person name</label>
          <input type="text" required />
        </div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default InputView;
