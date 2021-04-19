import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, stats }) => {
  const statsQuantity = stats.length;
  const widthItem = `calc(100%/${statsQuantity})`;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(stat => (
          <li
            className={styles.stat__item}
            key={stat.id}
            style={{
              backgroundColor: randomColorRGB(),
              flexBasis: widthItem,
            }}
          >
            <span className={styles.stat__label}>{stat.label}</span>
            <span className={styles.stat__percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
