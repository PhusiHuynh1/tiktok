import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config/routes';
import { HomeIcon, UserGropIcon, LiveIcon } from '~/components/Icons';
import Accounts from './components/Accounts';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
const statusLogin = true;
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
            {statusLogin && (
                <div>
                    <Accounts title={'Suggested Accounts'} />
                    <Accounts title={'Following Accounts'} />
                </div>
            )}
            {!statusLogin && (
                <>
                    <div style={{ marginLeft: 12, marginTop: 18 }}>
                        <div style={{ maxWidth: 356, height: 1, backgroundColor: 'rgba(22, 24, 35, 0.06)' }}></div>
                        <p
                            style={{
                                color: 'rgb(22, 24, 35, 0.4)',
                                fontSize: '1.4rem',
                                marginBottom: 10,
                                marginTop: 15,
                            }}
                        >
                            Log in to follow creators, like videos, and view comment
                        </p>
                        <Button large outline>
                            Login
                        </Button>
                    </div>
                    <Accounts title={'Suggested Accounts'} />
                </>
            )}
        </div>
    );
}
export default Sidebar;
