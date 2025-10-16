import { useAuth } from '~/contexts/AuthContext';
import { useState } from 'react';
import styles from './RegisterModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RegisterModal() {
    const { register, closeRegister } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (!username.trim()) return;
        register(username, email, password);
        closeRegister();
    };
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <h2>Register to TikTok</h2>
                <div>
                    <input
                        placeholder="Nhập tên hoặc số điện thoại"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleRegister}>register</button>
                    <button onClick={closeRegister}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
export default RegisterModal;
