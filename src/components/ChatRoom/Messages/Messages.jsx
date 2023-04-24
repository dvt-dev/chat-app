import React from 'react';
import styles from './Messages.module.scss';
import Message from '../Message/Message';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Messages = () => {
  return (
    <div className={cx('messages-container')}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      


      
    </div>
  )
}

export default Messages