import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const BestAnecdote = ({ anecdotes, votes }) => {
    const maxVotes = Math.max(...votes)
    const maxVotesIndex = votes.indexOf(maxVotes)
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[maxVotesIndex]}</p>
            <p>has {maxVotes} votes</p>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]


    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const getRandomInt = (max) => {
        let randomInt = Math.floor(Math.random() * Math.floor(max))
        while (randomInt === selected) {
            randomInt = Math.floor(Math.random() * Math.floor(max))
        }
        return randomInt
    }

    const handleNextClick = () => {
        setSelected(getRandomInt(anecdotes.length))
    }

    const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected] ? votes[selected] : 0} votes</p>
            <Button handleClick={handleNextClick} text='next anecdote' />
            <Button handleClick={handleVoteClick} text='vote' />
            <BestAnecdote anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

export default App