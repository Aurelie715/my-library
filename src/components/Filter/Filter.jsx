import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Filter.module.scss';

export default function Filter({buttonName, element1, element2}) {
  return (
    <div className={styles.dropdown}>
        <button type="button">
            {buttonName}<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
        </button>
        <ul>
            <li>{element1}</li>
            <li>{element2}</li>
        </ul>
    </div>
  )
}
