import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../../redux/contact/contactActions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button className={styles.deletebtn} onClick={() => deleteContact(id)}>
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter));
};

// // вариант 1
// const mapStateToProps = state => {
//   const { contacts, filter } = state.contacts;
//   const visibleContacts = getVisibleContacts(contacts, filter);

//   return {
//     contacts: visibleContacts,
//   };
// };

//вариант 2
const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
