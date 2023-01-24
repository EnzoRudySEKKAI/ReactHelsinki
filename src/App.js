import { useState } from 'react'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad , all, average, positive}) => {

    if (all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <table>
            <tbody>
                <StatisticLine text={"good"} value={good} />
                <StatisticLine text={"neutral"} value={neutral} />
                <StatisticLine text={"bad"} value={bad} />
                <StatisticLine text={"all"} value={all} />
                <StatisticLine text={"average"} value={average / all} />
                <StatisticLine text={"positive"} value={positive + " %"} />
            </tbody>
        </table>


    )
}
const App = () => {
    // save clicks of each button to its own state
    const [review,setReview] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        all: 0,
        average: 0,
        positive: 0
    })

    const handleGoodClick = () => {
        const setGood = {
            ...review,
            good: review.good + 1,
            all: review.all + 1,
            average: review.average + 1,
            positive: (review.good+1) * 100 / (review.all+1)
        }

        setReview(setGood)
    }

    const handleNeutralClick = () => {
        const setNeutral = {
            ...review,
            neutral: review.neutral + 1,
            all: review.all + 1,
            positive: review.good * 100 / (review.all+1)
        }
        setReview(setNeutral)
    }

    const handleBadClick = () => {
        const setBad = {
            ...review,
            bad: review.bad + 1,
            all: review.all + 1,
            average: review.average - 1,
            positive: review.good * 100 / (review.all+1)
        }
        setReview(setBad)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text={"good"} />
            <Button handleClick={handleNeutralClick} text={"neutral"} />
            <Button handleClick={handleBadClick} text={"bad"} />
            <Statistics good={review.good} neutral={review.neutral} bad={review.bad} all={review.all} average={review.average} positive={review.positive} />
        </div>
    )
}

export default App