const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const notifStyle = {
        color: 'green',
        fontSize: 20,
        style: 'solid',
        radius: 5,
        padding: 10,
        marginBottom: 10,
    }

    return (
        <div style={notifStyle}>
            {message}
        </div>
    )
}

export default Notification