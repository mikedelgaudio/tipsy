import { observer } from "mobx-react";
import { PersonMobx } from "../../../../models/person.model";
import { PersonCard } from "./Person-Card";

const PersonsView = observer(({ persons }: { persons: PersonMobx[] }) => {
  return (
    <>
      {persons.map((person: PersonMobx) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </>
  );
});

export { PersonsView };
