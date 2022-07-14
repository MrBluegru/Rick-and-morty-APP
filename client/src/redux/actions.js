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

export function getEpisodes() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/episodes/');
        dispatch({
            type: 'GET_EPISODES',
            payload: response.data
        });
    }
}

export function createCharacter(character) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/character/', character);
        dispatch({
            type: 'CREATE_CHARACTER',
            payload: response.data
        });
    }
}
