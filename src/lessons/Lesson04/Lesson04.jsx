import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

function Lesson04() {
  /* Пример 2 - передача функции через название */
  const showMessage = () => {
    alert("Func outer click");
  };
  /* Пример 3 - передача функции с аргументом */
  const showName = (name) => {
    alert(`Func outer click - ${name}`);
  };

  return (
    <div className="lesson04-component">
      <Counter/>
      {/* Пример 1 - передача функции напрямую в пропс */}
      <Button name="Func Inner" onButtonClick={() => alert("Func inner")} />
      {/* Пример 2 - передача функции через название */}
      <Button name="Func Outer" onButtonClick={showMessage} />
       {/* Пример 3 - передача функции с аргументом  */}
      <Button
        name="Func Outer with Parametr"
        onButtonClick={() => showName("Tom")}
      />
    </div>
  );
}

export default Lesson04;
