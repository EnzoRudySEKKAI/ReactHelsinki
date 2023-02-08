const ButtonShow = ({ show, setShow }) => {
    const handleShow = () => {
        setShow(show.name.common)
    }

    return (
        <button onClick={handleShow}>show</button>
    )
}

export default ButtonShow