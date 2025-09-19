import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import routes from '~/config/routes';
import AccountsItem from './AccoutsItem';

const cx = classNames.bind(styles);
function FollowingAccounts() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>Following accoutns</p>
            <div className={cx('accounts')}>
                <AccountsItem to={`/`} />
                <AccountsItem to={`/`} />
                <AccountsItem to={`/`} />
            </div>
        </div>
    );
}
export default FollowingAccounts;
