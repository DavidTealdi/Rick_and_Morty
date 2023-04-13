import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload)
            }

        case FILTER:
            const allCharactersFilter = state.allCharacters.filter(character => character.gender === action.payload)

            return {
                ...state, 
                myFavorites: 
                    action.payload === 'allCharacters' ? [...state.allCharacters] : allCharactersFilter
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharacters]
        
            return {
                ...state,
                myFavorites: 
                    action.payload === "A" ? allCharactersFavCopy.sort((a, b) => a.id - b.id) : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}

export default reducer