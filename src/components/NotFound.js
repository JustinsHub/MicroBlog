import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()
    
    const goHome = () => {
        history.push('/')
    }
    return (
    <div>
        <div>
            Page Not Found. Please go back home.
        </div>
        <div>
            <button className="btn btn-primary" onClick={goHome}>Home</button>
        </div>
    </div>
    )
}

export default NotFound