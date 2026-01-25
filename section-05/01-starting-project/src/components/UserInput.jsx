import { useState } from "react"

/**
 * @param {{label: string, initialValue: number, onUpdate: (newValue: number) => {}}} param0 
 */
function InputGroup({label, initialValue, onUpdate}) {
    const [value, setValue] = useState(initialValue);
    const name = label.toLocaleLowerCase().split(' ').join('-');
    function handleChange(event) {
        console.log(`InputGrup: ${event.target.value}`);
        const newValue = Number(event.target.value);
        if (newValue || newValue === 0) {
            setValue(() => newValue);
            onUpdate(newValue);
        }
    }

    return <div className="input-group">
        <label htmlFor={name}>{label.toLocaleUpperCase()}</label>
        <input type="number" name={name} value={value} onChange={handleChange} required></input>
    </div>
}

export default function UserInput({plan, onUpdatePlan}) {
    return <section id="user-input">
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
    </section>
}