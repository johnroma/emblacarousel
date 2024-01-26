
  import { useState } from 'react'

  export function Emblacarousel() {

  const [count, setCount] = useState(0)
    return (
      <div>
      <h1>Emblacarousel</h1>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count is: {count}
      </button>
      </div>
    
    )
}