import video1 from '~/assets/videos/video1.mp4';
import video2 from '~/assets/videos/video2.mp4';
import video3 from '~/assets/videos/video3.mp4';
import video4 from '~/assets/videos/video4.mp4';
import video5 from '~/assets/videos/video5.mp4';
import video6 from '~/assets/videos/video6.mp4';
import video7 from '~/assets/videos/video7.mp4';
import video8 from '~/assets/videos/video8.mp4';
import video9 from '~/assets/videos/video9.mp4';
import video10 from '~/assets/videos/video10.mp4';
import video11 from '~/assets/videos/video11.mp4';
import video12 from '~/assets/videos/video12.mp4';
import video13 from '~/assets/videos/video13.mp4';
import video14 from '~/assets/videos/video14.mp4';
import video15 from '~/assets/videos/video15.mp4';
import video16 from '~/assets/videos/video16.mp4';
import video17 from '~/assets/videos/video17.mp4';
import video18 from '~/assets/videos/video18.mp4';

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
    {
        src: video5,
    },
    {
        src: video6,
    },
    {
        src: video7,
    },
    {
        src: video8,
    },
    {
        src: video9,
    },
    {
        src: video10,
    },
    {
        src: video11,
    },
    {
        src: video12,
    },
    {
        src: video13,
    },
    {
        src: video14,
    },
    {
        src: video14,
    },
    {
        src: video15,
    },
    {
        src: video16,
    },
    {
        src: video17,
    },
    {
        src: video18,
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
