import Header from "./components/Header"
import CalculatorLogo from "./assets/investment-calculator-logo.png";

function App() {
  return (
    <Header title="Investment Calculator" headerImage={CalculatorLogo} altText="Image of a calculator" />
  )
}

export default App
