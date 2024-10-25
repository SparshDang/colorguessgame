import { useEffect, useRef, useState } from "react";
import style from "./App.module.css";
import ColorSlider from "./components/ColorSlider";

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [guessedColor, setGuessedColor] = useState([0, 0, 0]);
  const [choosenColor, setChoosenColor] = useState([0, 0, 0]);

  const redRef = useRef();
  const greenRef = useRef();
  const blueRef = useRef();

  const onColorChange = () => {
    setGuessedColor([
      redRef.current.value,
      greenRef.current.value,
      blueRef.current.value,
    ]);
  };

  const setRandomColor = () => {
    const rValue = Math.floor(Math.random() * 255);
    const gValue = Math.floor(Math.random() * 255);
    const bValue = Math.floor(Math.random() * 255);
    setChoosenColor([rValue, gValue, bValue]);
  };

  const reset = () => {
    setRandomColor();
    setShowAnswer(false);
  };

  const distance = Math.round(
    Math.sqrt(
      (choosenColor[0] - guessedColor[0]) ** 2 +
        (choosenColor[1] - guessedColor[1]) ** 2 +
        (choosenColor[2] - guessedColor[2]) ** 2
    )
  );

  useEffect(() => {
    setRandomColor();
  }, []);
  return (
    <>
      <h1 className={style.heading}>Guess Color</h1>
      <div className={style.main}>
        <div className={style.inputs}>
          <ColorSlider
            label="Red"
            onChangeFunction={onColorChange}
            ref={redRef}
            disabled={showAnswer}
          />
          <ColorSlider
            label="Green"
            onChangeFunction={onColorChange}
            ref={greenRef}
            disabled={showAnswer}
          />
          <ColorSlider
            label="Blue"
            onChangeFunction={onColorChange}
            ref={blueRef}
            disabled={showAnswer}
          />
          <div className={style.actions}>
            {showAnswer && <button onClick={reset}>Reset</button>}
            <button onClick={() => setShowAnswer(true)}>Check Answer</button>
          </div>

          {
            showAnswer &&
            <div className={style.answer}>
              <span>Color : rgb({choosenColor[0]},{choosenColor[1]},{choosenColor[2]})</span>
              <span>Distance: {distance}</span>
            </div>
          }
        </div>
        <div className={style.colors}>
          <div
            className={style.color__wrapper}
            style={{
              backgroundColor: `rgb(${choosenColor[0]}, ${choosenColor[1]}, ${choosenColor[2]})`,
            }}
          ></div>
          <div
            className={style.color__wrapper}
            style={{
              backgroundColor: `rgb(${guessedColor[0]}, ${guessedColor[1]}, ${guessedColor[2]})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
