import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Filter({buttonName, element1, element2}) {
  return (
    <div>
        <button type="button">
            {buttonName}<FontAwesomeIcon icon={faAngleDown} />
        </button>
        <ul>
            <li>{element1}</li>
            <li>{element2}</li>
        </ul>
    </div>
  )
}
