import { useState, useEffect } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
    const [persons, setPersons] = useState([])

    const hook = () => {
        fetch('http://localhost:3001/persons')
            .then(response => response.json())
            .then(data => {
                setPersons(data)
            })
    }

    useEffect(hook, [])

    const [filter, setFilter] = useState('')

    const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App