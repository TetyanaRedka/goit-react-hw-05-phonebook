import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import types from './contactConstants'; //redux
import actions from './contactActions'; //toolkit

import contactsList from '../../data/contacts-list.json';

// toolkit

const contacts = createReducer(contactsList, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

// redux

// const contacts = (state = contactsList, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
