import {useState} from "react";
import personsServices from "../services/persons";
const PersonForm = ({persons, setPersons, setNotification}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if(persons.find(person => person.name === newName)) {
            const ok = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (ok) {
                const person = persons.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber}
                personsServices.update(person.id, changedPerson).then(response => {

                    setPersons(persons.map(p => p.id !== person.id ? p : response))
                    setNewName('')
                    setNewNumber('')
                    setNotification({messageNotif:`Changed ${person.name}'s number`, typeNotif:'notif'})
                    setTimeout(() => {
                        setNotification({messageNotif:'', typeNotif:''})
                    }, 5000)
                })
            }
        }
        else{
            const personObject = {
                name: newName,
                number: newNumber,
            }
            personsServices.create(personObject).then(response => {
                setPersons(persons.concat(response))
                setNotification({messageNotif:`Added ${personObject.name}` , typeNotif:'notif'})
                setTimeout(() => {
                    setNotification({messageNotif:'', typeNotif:''})
                }, 5000)
                setNewName('')
                setNewNumber('')
            })

        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );


}
export default PersonForm

