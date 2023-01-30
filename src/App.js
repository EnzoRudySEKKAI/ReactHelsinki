import { useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '39-44-5323523', id: 1 }
    ])

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