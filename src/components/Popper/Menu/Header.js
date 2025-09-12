import classNames from 'classnames/bind';
import stypes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(stypes);
function Header({ onBack, title }) {
    return (
        <header className={cx('Header')}>
            <button className={cx('Header-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('Header-title')}>Langguge</h4>
        </header>
    );
}
export default Header;
