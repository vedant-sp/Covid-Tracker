import {GET_DATA} from './ActionType';
import axios from 'axios';

export const getData = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'https://data.covid19india.org/data.json',
    })
      .then(response => {
        console.log(response.data.statewise[0], 'reponse');
        dispatch({
          type: GET_DATA,
          payload: response.data.statewise,
        });
      })
      .catch(error => {
        console.log(error, 'login error is here');
      });
  };
};
