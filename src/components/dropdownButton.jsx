import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.css'

export default function DropdownButton({
  title = 'Thing', options = ['thing1', 'thing2', 'thing3'], color, backgroundColor,
}) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.dropdown} style={{ backgroundColor }}>
      <button type="button" className={styles.dropdownButton} onClick={toggleDropdown} style={{ color }}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {
            options.map((option) => (
              <a href={option[0]} style={{ color }}>
                {' '}
                <img src={option[1]} alt="icon" />
              </a>
            ))
          }
        </div>
      )}
    </div>
  )
}
DropdownButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}
DropdownButton.defaultProps = {
  color: 'black',
  backgroundColor: 'grey',
}
