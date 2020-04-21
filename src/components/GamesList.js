import React from 'react'

const GameList = props => {
    const {key} = props.match.params
    return(
        <h1>{key}</h1>
    )
}

export default GameList