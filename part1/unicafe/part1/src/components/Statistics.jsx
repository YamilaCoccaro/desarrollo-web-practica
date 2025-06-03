import React from 'react'



const Statistics = ({votes}) => {
    const getAll = () => votes.good+votes.neutral+votes.bad//ternarios
    const getAverage = () =>getAll()===0 ? 0 :(votes.good - votes.bad)/getAll()
    const getPositives = () =>getAll()===0 ? 0 : votes.good * 100 / getAll()
    
    if(getAll()===0) {
        return <p>No feedback given</p>
    }
    return (
        <div>
            <h1>statistics</h1>
            <p>good {votes.good}</p>
            <p>neutral {votes.neutral}</p>
            <p>bad {votes.bad}</p>
            <p>all {getAll()}</p>
            <p>average {getAverage()}</p>
            <p>positive {getPositives()} %</p>
        </div>
    )
}

export default Statistics