import classNames from 'classnames/bind';
import styles from './Playvideos.module.scss';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Playvideos({ src }) {
    const videoref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoref.current.play();
                } else {
                    videoref.current.currentTime = 0;
                    videoref.current.pause();
                }
            },
            { threshold: 0.5 },
        );
        observer.observe(videoref.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} ref={videoref} src={src} controls autoPlay muted loop></video>
        </div>
    );
}
export default Playvideos;
