import { calculateInvestmentResults, formatter } from "../util/investment";

function NoResults() {
    return <div>
        <h2>No Results</h2>
    </div>
}

export default function Results({
    initialInvestment, 
    annualInvestment, 
    expectedReturnAsPercent,
    durationInYears
}) {
    const anyResults = initialInvestment > 0 
        && annualInvestment > 0 
        && expectedReturnAsPercent > 0
        && durationInYears > 0;
    console.log(`anyResults: ${anyResults}`);
    const results = anyResults ? calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn: expectedReturnAsPercent,
        duration: durationInYears
    }) : [];
    let totalInterest = 0;
    
    return (anyResults ? <table id="results">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map(({year, interest, valueEndOfYear, annualInvestment}, index) => {
                totalInterest += interest;
                return <tr key={index}>
                    <td>{year}</td> 
                    <td>{formatter.format(valueEndOfYear)}</td>
                    <td>{formatter.format(interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format((index + 1) * annualInvestment)}</td>
                </tr>
            })}
        </tbody>
    </table> : <NoResults />)
}