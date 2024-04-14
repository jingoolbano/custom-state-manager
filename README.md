# custom-state-manager
How it Works
let's delve into how the useSharedSimpleState hook works:
1.Initialization: The hook initializes a Map (stateMap) to store the shared state. When a component first mounts, it checks if the state with the provided key exists in the localStorage. If it does, it retrieves the state from localStorage. Otherwise, it initializes the state with the provided initial value and stores it in stateMap.

2.State Management: The hook returns the current state value and a function to update the state. Whenever the state is updated using the update function, it updates both the local state and the state stored in localStorage.

3.Persistence: Changes to the state are persisted across page refreshes using localStorage. This ensures that the state remains consistent even after the page is reloaded.

4.Sharing State: Components can share state by using the same key with the useSharedSimpleState hook. This allows multiple components to access and update the same state without introducing complex dependencies.

Example
Here's an example of how you can use the useSharedSimpleState hook in your components:
```
const Counter: React.FC = () => {
  const [count, setCount] = useSharedSimpleState<number>('count', 0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>Count: {count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
```

In this example, the 'Counter' component shares the 'count' state using the useSharedSimpleState hook. The state is initialized with a key of 'count' and an initial value of 0. The component displays the count value and provides buttons to increment and decrement it. Other components can access and update the same count state by using the same key.
