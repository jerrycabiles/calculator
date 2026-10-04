import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState("");

  // Numbers
  const numberClick = (num) => {
    if (display === "0" || display === "Error") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  // Operators
  const operatorClick = (op) => {
    setFirstNumber(Number(display));
    setOperator(op);
    setDisplay("0");
  };

  // Equals
  const equalClick = () => {
    const secondNumber = Number(display);
    let answer;

    if (operator === "+") {
      answer = firstNumber + secondNumber;
    }

    if (operator === "-") {
      answer = firstNumber - secondNumber;
    }

    if (operator === "×") {
      answer = firstNumber * secondNumber;
    }

    if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error");
        return;
      }

      answer = firstNumber / secondNumber;
    }

    setDisplay(String(answer));
    setFirstNumber(null);
    setOperator("");
  };

  // Clear
  const clearClick = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator("");
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-sm p-5 rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-4">
          Calculator
        </h1>

        {/* Display */}
        <div className="bg-gray-900 text-white text-right text-3xl p-4 rounded-lg mb-4">
          {display}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">

          {/* Clear */}
          <button
            onClick={clearClick}
            className="bg-red-500 text-white p-4 rounded-lg text-xl"
          >
            C
          </button>

          <button
            onClick={() => numberClick("7")}
            className="bg-blue-200 p-4 rounded-lg text-xl"
          >
            7
          </button>

          <button
            onClick={() => numberClick("8")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            8
          </button>

          <button
            onClick={() => numberClick("9")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            9
          </button>

          {/* Operators */}
          <button
            onClick={() => operatorClick("÷")}
            className="bg-blue-500 text-white p-4 rounded-lg text-xl"
          >
            ÷
          </button>

          <button
            onClick={() => numberClick("4")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            4
          </button>

          <button
            onClick={() => numberClick("5")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            5
          </button>

          <button
            onClick={() => numberClick("6")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            6
          </button>

          <button
            onClick={() => operatorClick("×")}
            className="bg-blue-500 text-white p-4 rounded-lg text-xl"
          >
            ×
          </button>

          <button
            onClick={() => numberClick("1")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            1
          </button>

          <button
            onClick={() => numberClick("2")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            2
          </button>

          <button
            onClick={() => numberClick("3")}
            className="bg-gray-200 p-4 rounded-lg text-xl"
          >
            3
          </button>

          <button
            onClick={() => operatorClick("-")}
            className="bg-blue-500 text-white p-4 rounded-lg text-xl"
          >
            −
          </button>

          {/* Bottom Row */}
          <button
            onClick={() => numberClick("0")}
            className="bg-gray-200 p-4 rounded-lg text-xl col-span-2"
          >
            0
          </button>

          <button
            onClick={() => operatorClick("+")}
            className="bg-blue-500 text-white p-4 rounded-lg text-xl"
          >
            +
          </button>

          <button
            onClick={equalClick}
            className="bg-green-500 text-white p-4 rounded-lg text-xl"
          >
            =
          </button>

        </div>

        {/* User Guide */}
        <div className="mt-5 text-gray-600 text-sm">

          <h2 className="font-bold text-lg text-gray-800">
            How to Use
          </h2>

          <p>1. Enter a number.</p>
          <p>2. Choose an operator.</p>
          <p>3. Enter another number.</p>
          <p>4. Press = to calculate.</p>
          <p>5. Press C to clear.</p>

        </div>

      </div>

    </div>
  );
}

export default App;
