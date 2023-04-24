import React from 'react';
import styles from './Message.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Message = () => {
  return (
      <div className={cx('message-container',)}>
        <img src="" alt="" className={cx('message-user-avatar')} />
        
        <div className={cx('message-content')}>
          <div className={cx('message-info')}>
            <h3 className={cx('user-name')}>You</h3>
            <span className={cx('message-time')}>Today at 9:32 am</span>
          </div>
          <div className={cx('message-text-wrap')}>
            <p className={cx('message-text')}>Helloldksfjadfkhkdsjhfhdsalkjfhkjdshfkjhskahdkfhjhfkjdshkfjhdsk</p>
            <img src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" alt="Hinh anh" className={cx('message-photo')} />
          </div>
        </div>
      </div>   
  )
}

export default Message