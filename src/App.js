const App = () => {
    const course = 'Half Stack application development'
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name:'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    const partsp = props.parts.map((part, index) => <Part part={part.name} exercises={part.exercises} key={index} />)
    return (
        <div>
            {partsp}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Total = (props) => {
    let max = 0;
    props.parts.forEach(part => {
        max += part.exercises
    })
    return (
        <p>Number of exercises {max}</p>
    )
}

export default App