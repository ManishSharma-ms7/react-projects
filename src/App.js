import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleNext = function () {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}Hello</StepMessage>
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

const Button = function ({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: `${bgColor}`, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};

const StepMessage = function ({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

export default App;
