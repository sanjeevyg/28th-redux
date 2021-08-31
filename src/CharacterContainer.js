import React from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterContainer({characters}) {
    const renderCharacters = () => {
        return characters.map(character => 
            {return <CharacterCard key={character.id} character={character}/>}
        )
    }
    return (
        <div>
            {renderCharacters()}
        </div>
    )
}
