import React, { useState, useRef } from "react";
import "./Calculator.css";
//in this case, we are specifying the type of calculator
//what we are saying here is that Calculator, takes in no props!
const Calculator: React.FunctionComponent<{}> = () => {
  //lets stay consistent and use lower case for the type of each hook
  const [count, setCount] = useState<number>(0);
  const inputNumber = useRef<HTMLInputElement>(null);

  //when we want to specify the return type of the function,
  //we put it after the parameters!
  const increaseCount = (): void => {
    setCount(count + 1);
  };

  const decreaseCount = (): void => {
    setCount(count - 1);
  };

  //this is an example where we do not use the arrow function
  function increaseCountNormal(): void {}
  function decreaseCountNormal(): void {}

  const submitInput = (): void => {
    console.log(inputNumber.current?.value);
    //this is one way we can deal with it,
    setCount(count * Number(inputNumber.current?.value));
    //this ! means non-null assertion

    //If a property that we want to access does not exist,
    //the result of the expression will be undefined.

    //this ?. basically means if it is null, then we will return
    //undefined

    //Since we want to change its value, we need to assume that
    //it is not null to do that

    //hence the ! which is the non-null assertion!
    inputNumber.current!.value = "";
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="calculator-button-div">
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>

      <div className="calculator-button-div" style={{ marginTop: "2rem" }}>
        <input ref={inputNumber}></input>
        <button onClick={submitInput}>submit</button>
      </div>
    </div>
  );
};

export default Calculator;
