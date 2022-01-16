import { useState } from 'react'

const App = () => {
    const lights = {
        red: '',
        yellow: '',
        green: ''
    }

    const [light, setLight] = useState(lights)

    const switchLight = e => {
        for (const key in light) {
            if (key === e.target.classList[0]) {
                setLight(light => ({
                    ...light,
                    [key]: 'selected'
                }))
            } else {
                setLight(light => ({
                    ...light,
                    [key]: ''
                }))
            }
        }
    }
    return (
    <>
        <div className="container">
            <div className={`red light ${light.red}`} onClick={switchLight}></div>
            <div className={`yellow light ${light.yellow}`} onClick={switchLight}></div>
            <div className={`green light ${light.green}`} onClick={switchLight}></div>
        </div>
    </>
    )
}

export default App