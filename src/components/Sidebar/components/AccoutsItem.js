import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccoutsItem.module.scss';

const cx = classNames.bind(styles);
function AccountsItem({ data }) {
    return data.map((dt, index) => (
        <Link className={cx('link-item')} key={index}>
            <div className={cx('item')}>
                <img className={cx('avatar')} src={dt.avatar} alt="" />
                <span className={cx('name')}>
                    <p className={cx('nickname')}>{dt.fullname}</p>
                    <p className={cx('displayname')}>{dt.nickname}</p>
                </span>
            </div>
        </Link>
    ));
}
export default AccountsItem;
