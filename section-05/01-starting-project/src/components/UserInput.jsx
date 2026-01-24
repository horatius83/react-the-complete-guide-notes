import { useState } from "react"

/**
 * 
 * @param {{label: string, initialValue: number, onUpdate: (newValue: number) => {}}} param0 
 * @returns 
 */
function InputGroup({label, initialValue, onUpdate}) {
    const [value, setValue] = useState(initialValue);
    const name = label.toLocaleLowerCase().split('').join('-');
    function handleChange(event) {
        const newValue = Number(event.target.value);
        if (newValue) {
            setValue(() => value = newValue);
            onUpdate(newValue);
        }
    }

    return <div className="input-group">
        <label for={name}>{label.toLocaleUpperCase()}</label>
        <input type="number" name={name} value={value} onChange={handleChange}></input>
    </div>
}

export default function UserInput({
    initialInitialInvestment, 
    initialAnnualInvestment, 
    initialExpectedReturnAsPercent,
    initialDurationInYears
}) {
    const [initialInvestment, setInvestment] = useState(initialInitialInvestment);
    const [annualInvestment, setAnnualInvestment] = useState(initialAnnualInvestment);
    const [expectedReturnAsPercent, setExpectedReturnAsPercent] = useState(initialExpectedReturnAsPercent);
    const [durationInYears, setDurationInYears] = useState(initialDurationInYears);

    return <div id="user-input">
        <InputGroup label="Initial Investment" initialValue={initialInvestment} />
        <InputGroup label="Annual Investment" initialValue={annualInvestment} />
        <InputGroup label="Expected Return" initialValue={expectedReturnAsPercent} />
        <InputGroup label="Duration" initialValue={durationInYears} />
    </div>
}