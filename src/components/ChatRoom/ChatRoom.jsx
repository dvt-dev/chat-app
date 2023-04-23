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
        <div className={cx('side-bar')}>
          <SideBar /> 
        </div>
        <div className={cx('chat')}>
          <Chat />  
        </div>
      </div>
    </div>
  )
}

export default ChatRoom