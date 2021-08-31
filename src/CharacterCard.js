import React from 'react'

export default function CharacterCard({character}) {
    return (
        <div>
            <img src={character.image} alt="character" height="200" width="200"/>
            <h1>{character.name}</h1>
        </div>
    )
}
