const Notification = ({ errorMessage, errorType }) => {

    if (errorMessage === null) {
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

    const errorStyle = {
        color: 'red',
        fontSize: 20,
        style: 'solid',
        radius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const style = errorType==="error" ? errorStyle : notifStyle

    return (
        <div style={style}>
            {errorMessage}
        </div>
    )
}

export default Notification