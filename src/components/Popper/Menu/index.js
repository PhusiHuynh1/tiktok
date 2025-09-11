import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItems from './MenuItems';
const cx = classNames.bind(styles);
function Menu({ children, items }) {
    const renderItems = items.map((item, index) => {
        return <MenuItems key={index} data={item}></MenuItems>;
    });
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('contain')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
