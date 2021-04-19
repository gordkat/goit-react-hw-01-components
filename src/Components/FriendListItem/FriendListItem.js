import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './placeholder.png';
import styles from './FriendListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendsListItem.defaultProps = {
  avatar: placeholder,
};

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;
