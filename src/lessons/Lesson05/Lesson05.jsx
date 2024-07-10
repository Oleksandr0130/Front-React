import { v4 } from "uuid";

import "./styles.css";
import { serverData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
  const animalCards = serverData.map((animal) => {
    return (
      //Пример 1
      <div key={v4()}>
        <h2>Card</h2>
        <AnimalCard animalData={animal} />
      </div>
      //Пример 2
      // <AnimalCard key={v4()} animalData={animal} />
    );
  });

  console.log(animalCards);

  return (
    <div className="lesson05-component">
      {/* <AnimalCard animalData={serverData[0]} />
      <AnimalCard animalData={serverData[1]} />
      <AnimalCard animalData={serverData[2]} /> */}
      {animalCards}
    </div>
  );
}

export default Lesson05;
