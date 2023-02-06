import { useState, useEffect } from 'react'
import CountrySearch from "./components/CountrySearch";
import DisplayCountries from "./components/DisplayCountries";
import servicesCountries from "./services/servicesCountries";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const hook = () => {
        servicesCountries.getCountries()
            .then(response => {
                setCountries(response)
            })
    }
    useEffect(hook, [])

    return (
        <div>
            <CountrySearch filter={filter} setFilter={setFilter} />
            <DisplayCountries countries={countries} filter={filter} setCountries={setCountries} />
        </div>
    )
}

export default App