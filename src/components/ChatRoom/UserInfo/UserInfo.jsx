import React from 'react';
import styles from './UserInfo.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const UserInfo = () => {
  return (
    <div className={cx('user-info')}>
      <img src='' className={cx('avatar')} alt="Avatar" />
      <div className={cx('user')}>
        <h2 className={cx('user-name')}>Đỗ Văn Tuấn</h2>
        <p className={cx('user-des')}>My account</p>
      </div>
      <button className={cx('icon', 'icon-logout')}>
        <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default UserInfo