import Playvideos from '~/layouts/components/Playvideos/Playvideos';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useRef, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const videoref = useRef([]);
    const [listvideos, setListvideos] = useState([]);
    useEffect(() => {
        fetch(`https://tiktok-backend-yimh.onrender.com/api/video`)
            .then((response) => response.json())
            .then((data) => {
                const videoData = data.map((item) => ({
                    src: item.videoUrl,
                }));
                setListvideos(videoData);
            })
            .catch((error) => console.error('Error fetching video data:', error));
    }, []);

    useEffect(() => {
        if (listvideos.length === 0) return;
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
    }, [listvideos]);

    return listvideos.map((vd, index) => (
        <div key={index} className={cx('wrapper')}>
            <Playvideos ref={(el) => (videoref.current[index] = el)} src={vd.src} />
        </div>
    ));
}
export default Home;
