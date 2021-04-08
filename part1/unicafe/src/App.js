import React, { useState } from 'react'

const Feedback = (props) => {
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => props.setGood(props.good + 1)} text="good" />
      <Button handleClick={() => props.setNeutral(props.neutral + 1)} text="neutral" />
      <Button handleClick={() => props.setBad(props.bad + 1)} text="bad" />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> 
      {props.text}
    </button>
  )
}

const Statistics = ({ good, bad, neutral}) => {
  let total = good + bad + neutral
  let average = ((good) + (bad * -1)) / total
  let positive = ((good / total) * 100) + "%"
  if (total > 0) {
    return (
      <table>
        <tbody>
        <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </tbody>
          
      </table>
    )
  }
  return (
    <div>
      <p>No feedback given.</p>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback 
        good={good} 
        setGood={setGood} 
        neutral={neutral} 
        setNeutral={setNeutral} 
        bad={bad} 
        setBad={setBad} 
      />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
      />
    </div>
  )
}

export default App
