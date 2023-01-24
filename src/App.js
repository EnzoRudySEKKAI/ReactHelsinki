import { useState } from 'react'

const History = ({allClicks}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {allClicks.join(' ')}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0, allClicks: []
    })

    const handleLeftClick = (side) => () =>
        setClicks({ ...clicks, left: clicks.left + 1 , allClicks: clicks.allClicks.concat(side) })

    const handleRightClick = (side) => {
        setClicks({ ...clicks, right: clicks.right + 1 , allClicks: clicks.allClicks.concat(side) })
    }


    return (
        <div>
            {clicks.left}
            <Button handleClick={handleLeftClick("L")} text="left" />
            <Button handleClick={() => handleRightClick("R")} text="right" />
            {clicks.right}
            <History allClicks={clicks.allClicks} />
        </div>
    )
}

export default App