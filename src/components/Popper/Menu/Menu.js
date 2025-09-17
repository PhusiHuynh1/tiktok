import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items }) {
    const [history, sethistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = current.data.map((item, index) => {
        const ischildren = !!item.children;
        const handleNextPageChildren = () => {
            if (ischildren) sethistory((prev) => [...prev, item.children]);
        };
        return <MenuItems key={index} data={item} onClick={handleNextPageChildren}></MenuItems>;
    });
    const handleSetMenu = () => {
        sethistory((prev) => prev.slice(0, 1));
    };

    const handleBack = () => {
        sethistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            interactive
            hideOnClick={false}
            delay={[0, 400]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('contain')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={handleSetMenu}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
