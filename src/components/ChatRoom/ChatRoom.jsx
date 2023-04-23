import React from 'react';
import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';

import SideBar from './SideBar/SideBar'
import Chat from './Chat/Chat'


const cx = classNames.bind(styles);

const ChatRoom = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('container')}>
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default ChatRoom