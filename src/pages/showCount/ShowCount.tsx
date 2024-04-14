import React from 'react'
import useSharedSimpleState from '../../hooks/useSharedSimpleState'

const ShowCount: React.FC = () => {
  const [count] = useSharedSimpleState<number>('count', 0)

  const [text, setText] = useSharedSimpleState<string>('text', '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <p>
        the count number is <span className="showCount">{count}</span>
      </p>
      <div>
        <h2>Text Input</h2>
        <input type="text" value={text} onChange={handleChange} />
        <p>Text: {text}</p>
      </div>
    </div>
  )
}

export default ShowCount
