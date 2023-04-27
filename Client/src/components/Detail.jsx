import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'f1f9dcf5ae3d.3333700bff60b938aec9';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            {/* {
                character && <div>
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                </div>
                
                character ? <h2>{character.name}</h2> : null
            } */}

            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.specie}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail