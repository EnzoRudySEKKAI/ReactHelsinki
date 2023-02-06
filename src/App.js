import { useState, useEffect } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [filter, setFilter] = useState('')
    const hook = () => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }

    useEffect(hook, [])



    const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage} />
            <Filter setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons} setNotification={setErrorMessage}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow} setPersons={setPersons}/>
        </div>
    )
}

export default App