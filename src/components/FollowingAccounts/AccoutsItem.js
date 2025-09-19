import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountsItem({ to }) {
    return (
        <Link className={cx('link-item')} to={to}>
            <div className={cx('item')}>
                <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                    alt=""
                />
                <span className={cx('name')}>
                    <p className={cx('nickname')}>vũ da đen</p>
                    <p className={cx('displayname')}>zune3993123</p>
                </span>
            </div>
        </Link>
    );
}
export default AccountsItem;
