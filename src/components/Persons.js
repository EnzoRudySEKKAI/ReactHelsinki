import personeService from '../services/persons';
const Persons = ({ persons, setPersons, setNotification }) => {

    const deletePerson = (id) => {
        const person = persons.find(p => p.id === id)
        const ok = window.confirm(`Delete ${person.name} ?`)
        if (ok) {
            personeService.deletePerson(id)
            .then(response => {
                setPersons(persons.filter(p => p.id !== id))
            }).catch(error => {
                setNotification({messageNotif:`Information of ${person.name} has already been removed from server` , typeNotif:'error'})
                setTimeout(() => {
                    setNotification({messageNotif:'', typeNotif:''})
                }, 5000)
                setPersons(persons.filter(p => p.id !== id))
            })
        }
    }

    return (
        <ul>
            {persons.map(person => <li key={person.id}>
                {person.name} {person.number}
                <button onClick={()=>deletePerson(person.id)}>delete</button>
            </li>)}
        </ul>
    );
}

export default Persons;