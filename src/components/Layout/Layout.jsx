import { useState } from 'react'
import './Layout.css'
import topLayoutIcon from '../../assets/Layout Icons/topLayoutIcon.png'
import leftLayoutIcon from '../../assets/Layout Icons/leftLayoutIcon.png'

const Layout = (props) => {
    const [topClick, setTopClick] = useState(true)
    const [leftClick, setLeftClick] = useState(false)

    const setLayoutTop = () => {
        props.setLayout('top')
        setTopClick(true)
        setLeftClick(false)
    }

    const setLayoutLeft = () => {
        props.setLayout('left')
        setTopClick(false)
        setLeftClick(true)
    }

    const clickBorder = (click) => {
        if (click === true) {
            return {
                borderWidth: '1vh',
            }
        }
    }

    return (
        <div className="layoutBlock">
            <h1 className="layoutHeader">Layout Options</h1>

            <div className="layoutButtons">
                <button onClick={setLayoutTop} style={clickBorder(topClick)}>
                    <div>
                        <img src={topLayoutIcon} alt="Top" />
                    </div>
                </button>

                <button onClick={setLayoutLeft} style={clickBorder(leftClick)}>
                    <div>
                        <img src={leftLayoutIcon} alt="Left" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Layout
