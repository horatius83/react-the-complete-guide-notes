import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from 'react';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(`Hello World - ${selectedButton}!`);
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs 
                ButtonsContainer="menu"
                buttons={<>
                    <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                </>}
            >
            { !selectedTopic 
              ? (<p>Please select a topic.</p>)
              : (
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                </div>
            )}
            </Tabs>
        </Section>
    );
}