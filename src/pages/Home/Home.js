import video1 from '~/assets/videos/video1.mp4';
import video2 from '~/assets/videos/video2.mp4';
import video3 from '~/assets/videos/video3.mp4';
import video4 from '~/assets/videos/video4.mp4';
import Playvideos from '~/layouts/components/Playvideos/Playvideos';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

const listvideos = [
    {
        src: video1,
    },
    {
        src: video2,
    },
    {
        src: video3,
    },
    {
        src: video4,
    },
];
function Home() {
    const videoref = useRef([]);
    useEffect(() => {
        const observers = [];

        videoref.current.forEach((video) => {
            if (!video) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
                        video.play();
                        video.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        video.pause();
                        video.currentTime = 0;
                    }

                    if (!video.muted) {
                        const allVideos = document.querySelectorAll('video');
                        allVideos.forEach((v) => (v.muted = false));
                    }
                },
                { threshold: 0.05 },
            );

            observer.observe(video);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return listvideos.map((vd, index) => (
        <div key={index} className={cx('wrapper')}>
            <Playvideos ref={(el) => (videoref.current[index] = el)} src={vd.src} />
        </div>
    ));
}
export default Home;
