import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Chat.module.scss';
import Messages from '../Messages/Messages';
import MessageForm from '../MesageForm/MessageForm';

const cx = classNames.bind(styles);

const Chat = () => {
  return (
    <div className={cx('chat-container')}>
      <header className={cx('header-chat')}>
        <h3 className={cx('chat-name')}>Group #1</h3>
        <div className={cx('chat-icons')}>
          <button className={cx('icon', 'add-user-icon')}>
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
          </button>
          <button className={cx('icon', 'more-icon')}>
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </button>      
        </div>
      </header>

      <Messages />
      <MessageForm />
    </div>
  )
}

export default Chat