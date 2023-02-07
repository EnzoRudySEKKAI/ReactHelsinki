const Filter = ({setFilter}) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <form onChange={handleFilterChange}>
            <div>
                filter shown with <input onChange={handleFilterChange}/>
            </div>
        </form>
    );
}

export default Filter;