'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  useEffect(() => {
    console.log(props.error);
  }, []);
  return (
    <div style={{ padding: '5rem' }}>
      <h1>❌🙉</h1>
      <p>An error has occurred</p>
      <button onClick={() => props.reset()}>Try again</button>
    </div>
  );
}
