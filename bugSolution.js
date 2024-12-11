```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array - this is the problematic line

  return <div>Count: {count}</div>;
}
```
```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Fixed: Empty dependency array is appropriate here if we want to run only once

  return <div>Count: {count}</div>;
}
export default MyComponent;
```