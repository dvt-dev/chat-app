import React from 'react';
import styles from './Register.module.scss';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)

const Register = () => {
  return (      
      <div className={cx('form-container')}>
        <div className={cx('form-wrapper')}>
          <div className={cx('overlay-panel')}>
            <h1 className={cx('overlay_title')}>Welcome Back!</h1>
            <p className={cx('overlay_des')}>To keep connected with us please login with your personal info</p>
            <button className={cx('signIn')}>Sign in</button>
          </div>
          <form>
            <h1 className={cx('form_title')}>Create Account</h1>
              <div className={cx('social-container')}>
                <a className={cx('social-icon')}>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a className={cx('social-icon')}>
                  <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                </a>
              </div>
              <p className={cx('form_des')}>or use your email for registration</p>
              <input type='text' placeholder='Name'></input>
              <input type='email' placeholder='Email'></input>
              <input type='password' placeholder='Password'></input>
              <button className={cx('signUp')}>Sign up</button>
          </form>
        </div>
      </div>
  )
}

export default Register