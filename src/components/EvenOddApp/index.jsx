// write your code here
import {useState} from 'react'
import './index.css'

const EvenOddApp = () => {
  const [count, setCount] = useState(0)

  const onClickIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    setCount(prevCount => prevCount + randomNumber)
  }

  return (
    <div className="app-container">
      <div className="card-container">
        <h1>Count {count}</h1>
        <p>{count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}</p>
        <button type="button" onClick={onClickIncrement}>
          {' '}
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    </div>
  )
}
export default EvenOddApp
