import styles from './Accounts.module.scss';
import classNames from 'classnames/bind';
import AccountsItem from '~/components/Sidebar/components/AccoutsItem';

const cx = classNames.bind(styles);

const data = [
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        fullname: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4472/63ddd5b1bd082.jpg',
        fullname: 'Hoàng Hải',
        nickname: 'hai77',
    },
    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/192/631560ee94071.png',
        fullname: 'Huỳnh Khoa',
        nickname: 'bhuynhcongkhoa',
    },

    {
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/5441/6468d4988e0f9.jpg',
        fullname: 'Tài Khoản Giả Mạo',
        nickname: 'taikhoangiamao',
    },
];

function Accounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('separator')}></div>
            <p className={cx('header')}>{title}</p>
            <div className={cx('accounts')}>
                <AccountsItem data={data} />
            </div>
        </div>
    );
}
export default Accounts;
