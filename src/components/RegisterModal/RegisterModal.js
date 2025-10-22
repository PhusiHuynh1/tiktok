import { useAuth } from '~/contexts/AuthContext';
import { useState } from 'react';
import styles from './RegisterModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RegisterModal() {
    const { register, closeRegister, error } = useAuth();
    const [account, setAccount] = useState('');
    const [username, setUsername] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!username.trim() || !account.trim() || !displayname.trim() || !email.trim() || !password.trim()) return;
        const result = await register(account, username, email, password, displayname);
        if (result.success === true) closeRegister();
    };
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <h1>Register to TikTok</h1>
                <div className={cx('register-form')}>
                    {error && <p className={cx('register-error-message')}>{error} !</p>}
                    <label className={cx('register-form__label')}>Account</label>
                    <input
                        className={cx('register-form__input')}
                        type="acccount"
                        placeholder="Nhập tài khoản đăng ký"
                        autoComplete="new-account"
                        onChange={(e) => setAccount(e.target.value)}
                    />
                    <label className={cx('register-form__label')}>Email</label>
                    <input
                        className={cx('register-form__input')}
                        type="email"
                        placeholder="Email"
                        autoComplete="new-email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={cx('register-form__label')}>User Name</label>
                    <input
                        className={cx('register-form__input')}
                        type="username"
                        placeholder="username"
                        autoComplete="new-username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className={cx('register-form__label')}>Display Name</label>
                    <input
                        className={cx('register-form__input')}
                        type="displayname"
                        placeholder="displayname"
                        autoComplete="new-displayname"
                        onChange={(e) => setDisplayname(e.target.value)}
                    />
                    <label className={cx('register-form__label')}>Password</label>
                    <input
                        className={cx('register-form__input')}
                        type="password"
                        placeholder="mật khẩu"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={cx('buttons')}>
                    <button className={cx('button-register')} onClick={handleRegister}>
                        register
                    </button>
                    <button className={cx('button-cancel')} onClick={closeRegister}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
export default RegisterModal;
