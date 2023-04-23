import React from 'react';

import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import {auth} from '~/firebase/config';
import {FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'

const cx = classNames.bind(styles);

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();


const Login = () => {
  
  const handleFbLogin = () =>  {
    auth.signInWithPopup(fbProvider);
  }

  const handleGgLogin = () => {
    auth.signInWithPopup(ggProvider);
  }
  
  



  return (
    <div className={cx('form-container')}>
        <div className={cx('form-wrapper')}>
          <div className={cx('overlay-panel')}>
            <h1 className={cx('overlay_title')}>Hello, Friend!</h1>
            <p className={cx('overlay_des')}>Enter your personal details and start journey with us</p>
            <button className={cx('signIn')}>Sign up</button>
          </div>
          <form>
            <h1 className={cx('form_title')}>Sign in</h1>
              <div className={cx('social-container')}>
                <button className={cx('social-icon')} onClick={handleFbLogin}>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </button>
                <button className={cx('social-icon')} onClick={handleGgLogin}>
                  <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                </button>
              </div>
              <p className={cx('form_des')}>or use your account</p>
              <input type='email' placeholder='Email'></input>
              <input type='password' placeholder='Password'></input>
              <p className={cx('forgot-password')}>Forgot your password?</p>
              <button className={cx('signUp')}>Sign in</button>
          </form>
        </div>
      </div>
  )
}

export default Login
