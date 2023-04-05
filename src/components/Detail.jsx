import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = 'https://be-a-rym.up.railway.app/api/character';
const URL_BASE = '';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
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