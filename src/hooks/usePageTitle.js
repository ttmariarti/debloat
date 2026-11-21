import { useEffect, useRef } from 'react';

function usePageTitle(totalFeedback) {
  const originalTitle = useRef(document.title);

  useEffect(() => {
    document.title =
      totalFeedback > 0
        ? `Expresso — Відгуки (${totalFeedback})`
        : 'Expresso — Відгуки';

    return () => {
      document.title = originalTitle.current;
    };
  }, [totalFeedback]);
}

export default usePageTitle;
