import './App.css'

import React from 'react'
import useSharedSimpleState from './hooks/useSharedSimpleState'

const APP: React.FC = () => {
  const [count, setCount] = useSharedSimpleState<number>('count', 0)

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => setCount((prevCount) => prevCount - 1)

  return (
    <div className="container">
      <button onClick={increment}>Increment</button>
      <span className="count">{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default APP
