import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItems({ data }) {
    return (
        <Button to={data.to} icon={data.icon} item>
            {data.title}
        </Button>
    );
}
export default MenuItems;
