import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config/routes';
import { HomeIcon, UserGropIcon, LiveIcon } from '~/components/Icons';
import FollowingAccounts from '~/components/FollowingAccounts/FollowingAccounts';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <nav>
                <Menu>
                    <MenuItem to={config.Home} title={'For You'} icon={<HomeIcon />} />
                    <MenuItem to={config.Following} title={'Fllowing'} icon={<UserGropIcon />} />
                    <MenuItem to={config.Live} title={'Live'} icon={<LiveIcon />} />
                </Menu>
            </nav>
            <FollowingAccounts />
        </div>
    );
}
export default Sidebar;
