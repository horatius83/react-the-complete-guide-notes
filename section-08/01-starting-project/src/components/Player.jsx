import { useState, useRef } from 'react';

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState('unknown entity');

  function handleSetName() {
    setPlayerName(input.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={input} id="playerNameInput" type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
