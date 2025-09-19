import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children }) {
    console.log(children);
    return <div className={cx('Menu')}>{children}</div>;
}
export default Menu;
