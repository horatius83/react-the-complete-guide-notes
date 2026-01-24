import Header from "./components/Header"
import CalculatorLogo from "./assets/investment-calculator-logo.png";
import UserInput from "./components/UserInput";
import { useState } from "react";

const initialState = {
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturnAsPercent: 6,
    durationInYears: 10
};

function App() {
  const [investmentPlan, setInvestmentPlan] = useState(initialState);
  function handleUpdatePlan(newPlan) {
    console.log(newPlan);
    setInvestmentPlan(newPlan);
  }

  return (
    <>
      <Header 
        title="Investment Calculator" 
        headerImage={CalculatorLogo} 
        altText="Image of a calculator" 
      />
      <UserInput 
        plan={investmentPlan} 
        onUpdatePlan={handleUpdatePlan}
      ></UserInput>
    </>
  )
}

export default App
