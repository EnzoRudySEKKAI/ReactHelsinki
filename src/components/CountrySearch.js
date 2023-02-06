const CountrySearch = ({ filter, setFilter }) => {

    const handleSearchChange = (event) => {
        setFilter(event.target.value)
    }

  return (
    <div>
        find countries
      <input
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default CountrySearch;