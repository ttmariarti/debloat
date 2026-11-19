import { useEffect } from 'react';

function usePageTitle(totalFeedback) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      totalFeedback > 0
        ? `Expresso — Відгуки (${totalFeedback})`
        : 'Expresso — Відгуки';

    return () => {
      document.title = previousTitle;
    };
  }, [totalFeedback]);
}

export default usePageTitle;
