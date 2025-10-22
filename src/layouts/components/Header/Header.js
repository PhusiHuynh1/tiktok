import classNames from 'classnames/bind';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import { logo } from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import configroutes from '~/config/routes';
import { useAuth } from '~/contexts/AuthContext';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Langguge',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_ITEM_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/feedback',
        separate: true,
    },
];
function Header() {
    const { openLogin } = useAuth();
    const { user, loading } = useAuth();

    if (loading) return null;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configroutes.Home} className={cx('logo-link')}>
                        <Image src={logo} alt="Tiktok" />
                    </Link>
                </div>

                <div className={cx('actions')}>
                    {!!user ? (
                        <>
                            <Tippy placement="bottom" content="Upload video">
                                <button className={cx('user-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Message">
                                <button className={cx('user-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Inbox">
                                <button className={cx('user-btn')}>
                                    <InboxIcon count={12} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button onClick={openLogin} primary>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={!!user ? MENU_ITEM_USER : MENU_ITEMS}>
                        {!!user ? (
                            <Image className={cx('user-avatar')} src={user.avatar} alt="ảnh" />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
