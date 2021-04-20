import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import contactActions from '../../redux/contact/contactActions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.findtext}>
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({ value: contacts.filter });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
