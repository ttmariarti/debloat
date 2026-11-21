import { useFeedback } from '../context/FeedbackContext.jsx';

function Statistics() {
  const { feedback, total, positivePercentage } = useFeedback();
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <p>Добре: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Погано: {bad}</p>
      <p>Всього: {total}</p>
      <p>Позитивних відгуків: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
