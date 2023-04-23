import React from 'react'
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Search = () => {
  return (
    <>
      <div className={cx('search')}>
        <div className={cx('search-container')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}></FontAwesomeIcon>
          <input type="text" className={cx('search-input')} placeholder='Search' />
        </div>
      </div>
    </>
  )
}

export default Search