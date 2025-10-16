import { useAuth } from '~/contexts/AuthContext';
import { useState } from 'react';
import styles from './LoginModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginModal() {
    const { login, closeLogin, openRegister } = useAuth();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (!username.trim()) return;
        login(username);
        closeLogin();
    };
    const handletoRegister = () => {
        closeLogin();
        openRegister();
    };
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <h2>Log in to TikTok</h2>
                <div>
                    <input
                        placeholder="Nhập tên hoặc số điện thoại"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={closeLogin}>Cancel</button>
                </div>
                <p className={cx('switch')}>
                    chưa có tài khoản? <span onClick={handletoRegister}>Đăng ký</span>
                </p>
            </div>
        </div>
    );
}
export default LoginModal;
