import "./styles.css";

function Button({ name, type = "button", onButtonClick }) {
  console.log('button component render - name prop changed')
  // const nameButton = "Get";

  // return <button className="button-component">{nameButton} button</button>;
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
