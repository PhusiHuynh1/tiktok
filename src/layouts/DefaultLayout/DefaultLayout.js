import Header from '~/layouts/components/Header';
import Sidebar from '~/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import LoginModal from '~/components/LoginModal/LoginModal';
import RegisterModal from '~/components/RegisterModal/RegisterModal';
import { useAuth } from '~/contexts/AuthContext';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { showLogin, showRegister } = useAuth();
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Fragment>{showLogin && <LoginModal />}</Fragment>
            <Fragment>{showRegister && <RegisterModal />}</Fragment>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
