import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick }) => {
  const buttonNames = [
    "c",
    "%",
    "+",
    "*",
    "/",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    ".",
    "7",
    "8",
    "9",
    "e",
    "0",
    "00",
    "=",
  ];
  return (
    <div className={style.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
