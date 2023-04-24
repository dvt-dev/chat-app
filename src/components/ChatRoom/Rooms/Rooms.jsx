import React from 'react';
import styles from './Rooms.module.scss';
import Search from '../Searchs/Search';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Rooms = () => {
  return (
    <>
      <div className={cx('rooms-wrapper')}>
        <header className={cx('header-rooms')}>
          <h2 className={cx('text')}>Messages</h2>  
          <button className={cx('icon', 'icon-add-room')}>
            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
          </button>
        </header>

        <div className={cx('search')}>
          <Search />
        </div>

        <div className={cx('room-list')}>
          
          <div className={cx('room-chat')}>
            <img src="" alt="room-avatar" className={cx('room-avatar')} />
            <div className={cx('room-info')}>
              <h4 className={cx('room-name')}>Group #1</h4>
              <p className={cx('room-des')}>Ban: hello</p>
            </div>
            <p className={cx('room-times')}>9:32</p>
          </div>

          <div className={cx('room-chat')}>
            <img src="" alt="room-avatar" className={cx('room-avatar')} />
            <div className={cx('room-info')}>
              <h4 className={cx('room-name')}>Group #1</h4>
              <p className={cx('room-des')}>Ban: wow, that's an ...</p>
            </div>
            <p className={cx('room-times')}>9:32</p>
          </div>
          
          
        </div>       
      </div>
    </>
  )
}

export default Rooms