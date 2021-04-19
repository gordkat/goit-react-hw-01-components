import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friend__item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  frieds: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default FriendsList;
