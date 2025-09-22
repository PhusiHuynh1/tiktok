import classNames from 'classnames/bind';
import styles from './VideoInteractionButtons.module.scss';
import { Link } from 'react-router-dom';
import { LikeIcon } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);
function VideoInteractionButtons() {
    return (
        <div className={cx('Interaction')}>
            <div className={cx('user')}>
                <Link className={cx('avatar')}></Link>
                <button></button>
            </div>
            <div className={cx('like')}>
                <LikeIcon />
            </div>
        </div>
    );
}
export default VideoInteractionButtons;
