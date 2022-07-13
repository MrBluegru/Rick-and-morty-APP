import axios from 'axios';

export function getCharacters() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/characters/');
        dispatch({
            type: 'GET_CHARACTERS',
            payload: response.data
        });
    }
}