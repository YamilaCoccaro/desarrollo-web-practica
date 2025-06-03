import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
   
  const[votes, setVotes] = useState({
    good:0,
    neutral:0,
    bad:0
  })
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setVotes({ ...votes, good: votes.good + 1})}>good</button>
      <button onClick={() => setVotes({...votes, neutral: votes.neutral + 1})}>neutral</button>
      <button onClick={() => setVotes({...votes, bad: votes.bad + 1})}>bad</button>
      <Statistics votes={votes}></Statistics>
      
    </div>
  )
}

export default App