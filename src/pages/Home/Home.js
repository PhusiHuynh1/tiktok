import video1 from '~/assets/videos/video1.mp4';
import video2 from '~/assets/videos/video2.mp4';
import video3 from '~/assets/videos/video3.mp4';
import video4 from '~/assets/videos/video4.mp4';
import Playvideos from '~/layouts/components/Playvideos/Playvideos';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

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
    return listvideos.map((vd, index) => (
        <div key={index} className={cx('wrapper')}>
            <Playvideos src={vd.src} />
        </div>
    ));
}
export default Home;
