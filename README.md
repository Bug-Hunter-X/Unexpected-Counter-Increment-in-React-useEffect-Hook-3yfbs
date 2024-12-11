# Unexpected Counter Increment in React useEffect Hook
This repository demonstrates a common error in React's `useEffect` hook where an empty dependency array leads to unexpected behavior.  The counter continuously increments even though it should only update based on certain events.

## Bug Description
The `useEffect` hook is used to set up a timer that increments a counter every second.  However, the empty dependency array `[]` causes the effect to run only once after the initial render and then remains active.  Even when the component is not re-rendered, the timer continues to run.

## Bug Solution
The solution is to include the correct dependencies in the dependency array. In this case, including no dependency allows the effect to run only once after mount, and then be cleaned up on unmount.
