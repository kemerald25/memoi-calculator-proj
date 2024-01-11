let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  updateDisplay();
}


        function clearDisplay() {
            displayValue = "";
            updateDisplay();
        }

        function calculate() {
            try {
                const result = eval(displayValue);
                displayValue = String(result);
                updateDisplay();

            } catch (error) {
                displayValue = "Error";
                updateDisplay();
            }
        }

        function backSpace() {
            displayValue = displayValue.slice(0, -1);
            updateDisplay();
        }

        function calculateSquareRoot() {
          try {
              const result = Math.sqrt(parseFloat(displayValue));
              displayValue = result.toFixed(2); // or use a different number of decimal places if needed
              updateDisplay();
          } catch (error) {
              displayValue = "Error";
              updateDisplay();
          }
      }
      

      //   function calculate() {
      //     try {
      //         const result = eval(displayValue);
      //         displayValue = String(result);
      //         updateDisplay();

      //     } catch (error) {
      //         displayValue = "Error";
      //         updateDisplay();
      //     }
      // }

        function updateDisplay() {
            document.getElementById("display").value = displayValue;
        }

        // Event listener for keyboard input
        document.addEventListener("keydown", handleKeyboardInput);

        function handleKeyboardInput(event) {
            const key = event.key;

            if (/[\d+\-*/.=]/.test(key) || key === "Backspace") {
                event.preventDefault();
                if (key === "=") {
                    calculate();
                } else if (key === "Backspace") {
                    backSpace();
                } else {
                    addToDisplay(key);
                }
            } else if (key === "c" || key === "C") {
                event.preventDefault();
                clearDisplay();
            }
        }
        module.exports = { addToDisplay, clearDisplay, calculate, backSpace, calculateSquareRoot, updateDisplay };
