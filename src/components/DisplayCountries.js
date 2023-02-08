import ButtonShow from "./ButtonShow";

const DisplayCountries = ({ countries, filter, setFilter }) => {

    const countriesToShow = filter === '' ? countries : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if(countriesToShow.length>10){
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if(countriesToShow.length===1){
        return (
            <div>
                <h1>{countriesToShow[0].name.common}</h1>
                <p>capital {countriesToShow[0].capital}</p>
                <p>population {countriesToShow[0].population}</p>
                <h2>languages</h2>
                <ul>
                    {Object.values(countriesToShow[0].languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <img src={countriesToShow[0].flags.png} alt="flag" width="100" height="100" />
            </div>
        )
    }
    else{
        return (
            <div>
                {countriesToShow.map(country => <p key={country.name.common}>{country.name.common} <ButtonShow show={country} setShow={setFilter} /></p>)}
            </div>
        )
    }
}

export default DisplayCountries