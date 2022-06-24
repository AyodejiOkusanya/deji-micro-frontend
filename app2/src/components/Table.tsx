import { Button, Container, Input } from "@chakra-ui/react";
import { useState } from "react";

type Person = {
  name: string;
  age: number;
  job: string;
  hobby: string;
};

const people: Person[] = [
  { name: "Bobby", age: 1000, job: "Doctor", hobby: "Flying" },
  { name: "Rachel", age: 2, job: "Head of Surgery", hobby: "Poker" },
  { name: "Tom", age: 15, job: "Unemployed", hobby: "Chilling" },
];

export const Table = () => {
  const [allPeople, setAllPeople] = useState<Person[]>(() => [...people]);
  const [sorted, setSorted] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const handleSortByAgeClick = () => {
    if (sorted) {
      setAllPeople([...people]);
    } else {
      setAllPeople((prev) => {
        return [...prev.sort((a, b) => a.age - b.age)];
      });
    }

    setSorted((prev) => !prev);
  };

  const handleInputChange = (event: any) => {
    setNameInput(event.target.value);
    if (event.target.value) {
      setAllPeople(
        people.filter(({ name }) =>
          name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setAllPeople(people);
    }
  };

  return (
    <Container>
      <Input value={nameInput} onChange={handleInputChange} />
      <Button onClick={handleSortByAgeClick}>Sort By Age</Button>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Hobby</th>
          </tr>
        </thead>
        <tbody>
          {allPeople.map(({ name, age, job, hobby }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{job}</td>
              <td>{hobby}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
