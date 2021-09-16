import {ADD_A_NEW_CAT, EDIT_A_NEW_CAT, DELETE_A_NEW_CAT} from './actionTypes';

export const addNewCat = payload => ({
  type: ADD_A_NEW_CAT,
  payload,
});

export const editCat = payload => ({
  type: EDIT_A_NEW_CAT,
  payload,
});

export const deleteCat = payload => ({
  type: DELETE_A_NEW_CAT,
  payload,
});
