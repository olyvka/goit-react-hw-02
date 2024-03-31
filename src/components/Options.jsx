import React from "react";

function Options({ updateFeedback, totalFeedback, handleReset }) {
  return (
    <div className="options">
      <h2>Leave Feedback</h2>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
