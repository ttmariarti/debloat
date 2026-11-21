import { useFeedback } from '../context/FeedbackContext.jsx';

function FeedbackOptions() {
  const { options: feedbackOptions, leaveFeedback } = useFeedback();

  return (
    <div>
      {feedbackOptions.map(option => (
        <button key={option} type="button" onClick={() => leaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
