

const Course = ({course})=>{
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    const partsp = props.parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id} />)
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
    const total = props.parts.reduce((prevPart, currentPart) => prevPart + currentPart.exercises, 0)
    return (
        <h4>total of {total} exercises</h4>
    )
}

export default Course