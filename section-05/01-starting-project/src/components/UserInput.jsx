import { useState } from "react"

/**
 * @param {{label: string, initialValue: number, onUpdate: (newValue: number) => {}}} param0 
 */
function InputGroup({label, initialValue, onUpdate}) {
    const [value, setValue] = useState(initialValue);
    const name = label.toLocaleLowerCase().split('').join('-');
    function handleChange(event) {
        const newValue = Number(event.target.value);
        if (newValue) {
            setValue(() => newValue);
            onUpdate(newValue);
        }
    }

    return <div className="input-group">
        <label for={name}>{label.toLocaleUpperCase()}</label>
        <input type="number" name={name} value={value} onChange={handleChange}></input>
    </div>
}

export default function UserInput({plan, onUpdatePlan}) {
    return <div id="user-input">
        <InputGroup 
            label="Initial Investment" 
            initialValue={plan.initialInvestment} 
            onUpdate={(value) => onUpdatePlan({...plan, initialInvestment: value})}
        />
        <InputGroup 
            label="Annual Investment" 
            initialValue={plan.annualInvestment} 
            onUpdate={(value) => onUpdatePlan({...plan, annualInvestment: value})}
        />
        <InputGroup 
            label="Expected Return" 
            initialValue={plan.expectedReturnAsPercent} 
            onUpdate={(value) => onUpdatePlan({...plan, expectedReturnAsPercent: value})}
        />
        <InputGroup 
            label="Duration" 
            initialValue={plan.durationInYears} 
            onUpdate={(value) => onUpdatePlan({...plan, durationInYears: value})}
        />
    </div>
}