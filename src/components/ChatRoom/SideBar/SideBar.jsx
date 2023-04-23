import React from 'react';

import styles from './SideBar.module.scss';
import UserInfo from '../UserInfo/UserInfo';

import classNames from 'classnames/bind';
import Rooms from '../Rooms/Rooms';

const cx = classNames.bind(styles);


const SideBar = () => {
  return (
    <>
      <div className={cx('user-info')}>
        <UserInfo />
      </div>
      <div className={cx('room-list')}>
        <Rooms />
      </div>
    </>
  )
}

export default SideBar