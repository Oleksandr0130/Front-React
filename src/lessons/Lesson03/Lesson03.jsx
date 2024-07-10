import "./styles.css";
import AnimalCard from "../../components/AnimalCard/OldAnimalCard";
import Button from "../../components/Button/Button";
import { lionObj, zebraObj, hippoObj } from "./data";

function Lesson03() {
  return (
    <div className="lesson03-component">
      {/* <Button name="Clear" />
      <Button name="Delete" />
      <Button /> */}
      <AnimalCard
        animalName={lionObj.name}
        species={lionObj.species}
        role={lionObj.role}
        animalImg={lionObj.image}
        //animalData = {lionObj}
      >
        <p>Madagascar</p>
        <div>{lionObj.skills[0]}</div>
      </AnimalCard>
      <AnimalCard
        animalName={zebraObj.name}
        species={zebraObj.species}
        role={zebraObj.role}
        animalImg={zebraObj.image}
      >
        <p>Madagascar</p>
      </AnimalCard>
      <AnimalCard
        animalName={hippoObj.name}
        species={hippoObj.species}
        role={hippoObj.role}
        animalImg={hippoObj.image}
      />
    </div>
  );
}

export default Lesson03;
