// Feedback.js
import React from "react";

function Feedback({ feedbackCounts, totalFeedback, positivePercentage }) {
  return (
    <div className="feedback">
      <h2>Feedback Statistics</h2>
      <p>Total Feedbacks: {totalFeedback}</p>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
