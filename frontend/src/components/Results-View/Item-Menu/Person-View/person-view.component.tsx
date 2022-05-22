import { observer } from "mobx-react";
import { Person } from "../../../../models/person.model";
import { PersonCard } from "./Person-Card";

const PersonsView = observer(({ persons }: { persons: Person[] }) => {
  return (
    <>
      {persons.map((person: Person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </>
  );
});

export { PersonsView };
