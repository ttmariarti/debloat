import { createContext, useContext } from 'react';

const FeedbackContext = createContext(null);

export function useFeedback() {
  const context = useContext(FeedbackContext);

  if (context === null) {
    throw new Error('useFeedback must be used within a FeedbackContext.Provider');
  }

  return context;
}

export default FeedbackContext;
