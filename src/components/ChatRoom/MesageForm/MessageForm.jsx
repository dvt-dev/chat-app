import React from 'react';
import styles from './MessageForm.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MessageForm = () => {
  return (
    <div className={cx('message-form')}>
      <input type="text" placeholder='Your messager' className={cx('mesage-form_input')} />
      <div className={cx('message-form_icons')}>
        <button className={cx('icon', 'icon-image')}>
          <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
        </button>
        <button className={cx('icon', 'icon-send')}>
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </button>

      </div>
    </div>
  )
}

export default MessageForm