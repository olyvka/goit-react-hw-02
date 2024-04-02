import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";
import Description from "./components/Description";
import "./App.css";

function App() {
  const initialFeedbackCounts = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Використовуємо функцію ініціалізації стану, щоб визначити початкові значення
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const savedFeedbackCounts = JSON.parse(localStorage.getItem("feedbackCounts"));
    return savedFeedbackCounts || initialFeedbackCounts;
  });

  useEffect(() => {
    // Зберігаємо дані стану в локальному сховищі при зміні
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]); // Ефект запускається при зміні feedbackCounts

  const updateFeedback = (feedbackType) => {
    // Оновлюємо стан, додаючи одиницю до відповідного типу відгуку
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage =
    totalFeedback === 0
      ? 0
      : Math.round(
          ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
        );

  const handleReset = () => {
    // Скидаємо дані стану до початкових значень
    setFeedbackCounts(initialFeedbackCounts);
  };

  return (
    <div className="App">
      <Description />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        />
    </div>
  );
}

export default App;
