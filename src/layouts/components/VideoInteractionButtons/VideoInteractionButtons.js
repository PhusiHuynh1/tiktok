import classNames from 'classnames/bind';
import styles from './VideoInteractionButtons.module.scss';
import { Link } from 'react-router-dom';
import { LikeIcon, CommentIcon, BookmarkIcon, ShareIcon, PlusIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);
function VideoInteractionButtons() {
    return (
        <div className={cx('Interaction')}>
            <div className={cx('user')}>
                <Link className={cx('avatar-link')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                        alt=""
                    />
                </Link>
                <button className={cx('btn-plus')}>
                    <PlusIcon />
                </button>
            </div>
            <button className={cx('btn-like')}>
                <span className={cx('like')}>
                    <LikeIcon />
                </span>
                <strong className={cx('count-like')}>738</strong>
            </button>
            <button className={cx('btn-comment')}>
                <span className={cx('comment')}>
                    <CommentIcon />
                </span>
                <strong className={cx('count-comment')}>432</strong>
            </button>
            <button className={cx('btn-bookmark')}>
                <span className={cx('bookmark')}>
                    <BookmarkIcon />
                </span>
                <strong className={cx('count-bookmark')}>123</strong>
            </button>
            <button className={cx('btn-share')}>
                <span className={cx('share')}>
                    <ShareIcon />
                </span>
                <strong className={cx('count-share')}>233</strong>
            </button>
        </div>
    );
}
export default VideoInteractionButtons;
