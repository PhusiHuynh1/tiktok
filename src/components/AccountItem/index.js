import classnames from 'classnames/bind';
import stypes from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classnames.bind(stypes);
function AccountItem({ data, alt = '' }) {
    return data.map((dt) => (
        <Link to={`/@/${dt.nickname}`} key={dt.id} className={cx('wrapper')}>
            <img className={cx('avatar')} src={dt.avatar} alt={alt}></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{dt.full_name}</span>
                    {dt.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{dt.nickname}</span>
            </div>
        </Link>
    ));
}
export default AccountItem;
