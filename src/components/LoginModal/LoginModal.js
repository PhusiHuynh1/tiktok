import { useAuth } from '~/contexts/AuthContext';
import { useState } from 'react';
import styles from './LoginModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginModal() {
    const { login, closeLogin, openRegister, error } = useAuth();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!account.trim() || !password.trim()) return alert('Vui lòng điền đầy đủ thông tin đăng nhập');
        const result = await login(account, password);
        if (result.success === true) {
            console.log('đóng thành công', error);
            closeLogin();
        }
    };
    const handletoRegister = () => {
        closeLogin();
        openRegister();
    };
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <h1>Log in to TikTok</h1>
                <div className={cx('login-form')}>
                    {error && <p className={cx('login-error-message')}>{error} !</p>}
                    <label className={cx('login-form__label')}>Account</label>
                    <input
                        className={cx('login-form__input')}
                        type="account"
                        placeholder="Nhập tên tài khoản"
                        value={account}
                        autoComplete="new-account"
                        onChange={(e) => setAccount(e.target.value)}
                    />
                    <label className={cx('login-form__label')}>Password</label>
                    <input
                        className={cx('login-form__input')}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={cx('buttons')}>
                    <button className={cx('button-login')} onClick={handleLogin}>
                        Login
                    </button>
                    <button className={cx('button-cancel')} onClick={closeLogin}>
                        Cancel
                    </button>
                </div>
                <p className={cx('switch')}>
                    <span>Bạn chưa có tài khoản? </span>
                    <span className={cx('link-register')} onClick={handletoRegister}>
                        Đăng ký
                    </span>
                </p>
            </div>
        </div>
    );
}
export default LoginModal;
