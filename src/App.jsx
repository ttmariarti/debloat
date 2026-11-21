import { useEffect, useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Notification from './components/Notification.jsx';
import Section from './components/Section.jsx';
import Statistics from './components/Statistics.jsx';
import FeedbackContext from './context/FeedbackContext.jsx';
import usePageTitle from './hooks/usePageTitle.js';

const options = ['good', 'neutral', 'bad'];

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () =>
    feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  usePageTitle(total);

  const leaveFeedback = option => {
    setFeedback(previousFeedback => ({
      ...previousFeedback,
      [option]: previousFeedback[option] + 1,
    }));
  };

  return (
    <FeedbackContext.Provider
      value={{ options, feedback, leaveFeedback, total, positivePercentage }}
    >
      <main>
        <Section title="Залиште відгук">
          <FeedbackOptions />
        </Section>
        <Section title="Статистика">
          {total > 0 ? (
            <Statistics />
          ) : (
            <Notification message="Наразі відгуків немає" />
          )}
        </Section>
      </main>
    </FeedbackContext.Provider>
  );
}

export default App;
