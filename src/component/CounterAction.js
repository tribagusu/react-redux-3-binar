import React, { useState } from "react"

const CounterAction = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default CounterAction
