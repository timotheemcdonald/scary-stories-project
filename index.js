import React from 'react'
import {render} from 'react-dom'
import './styles.css'

function App(props){
    return(
        <div>
            <h1>Scary Stories</h1>
            <p>These stories are Scary!!!</p>
        </div>
    )
}

render(
    <App />,
    document.querySelector('#root')
)