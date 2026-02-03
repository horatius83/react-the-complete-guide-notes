export default function ResultModal({targetTime, ref, timeRemaining, onReset}) {
    const userLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    return <dialog ref={ref} className="result-modal" onClose={onReset}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>
}