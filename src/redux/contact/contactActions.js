// import types from './contactConstants'; //redux
import { createAction } from '@reduxjs/toolkit';

//toolkit

const addContact = createAction('contact/add', ({ id, name, number }) => ({
  payload: {
    id,
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');
const filterContact = createAction('contact/filter');

//redux

// const addContact = ({ id, name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id,
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filterContact = value => ({
//   type: types.FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, filterContact };
