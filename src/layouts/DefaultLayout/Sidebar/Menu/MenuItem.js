import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, icon, title }) {
    console.log(icon);
    return (
        <NavLink className={(nav) => cx('Menu-item-link', { active: nav.isActive })} to={to}>
            <span>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
export default MenuItem;
