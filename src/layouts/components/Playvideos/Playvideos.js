import classNames from 'classnames/bind';
import styles from './Playvideos.module.scss';

import VideoInteractionButtons from '~/layouts/components/VideoInteractionButtons/VideoInteractionButtons';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const Playvideos = forwardRef(({ src }, ref) => {
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} ref={ref} src={src} controls autoPlay muted loop></video>
            <VideoInteractionButtons />
        </div>
    );
});

export default Playvideos;
