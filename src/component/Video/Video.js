import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import 'src/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useElementOnScreen } from 'src/pages/Home/Home';
const cx = classNames.bind(styles);
const VideoInfo = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt="avt" />

                <div className={cx('content_info')}>
                    <div>
                        <a href="#" className={cx('fullname')}>
                            {data.fullname}
                        </a>
                        <a href="#" className={cx('nickname')}>
                            {data.nickname}
                        </a>
                    </div>
                    <div className={cx('label')}>{data.label}</div>
                    <span>
                        <FontAwesomeIcon icon={faMusic} />
                        <span className={cx('label_music')}>{data.labelMusic}</span>
                    </span>
                </div>
            </div>
            <div className={cx('follow_btn')}>
                <Button outline small>
                    Follow
                </Button>
            </div>
        </div>
    );
};

const VideoContent = ({ data }) => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className={cx('video_content')}>
            <video ref={videoRef} onClick={handleVideo} className={cx('video')} src={data.video} loop />
            <div className={cx('list_icon')}>
                <div className={cx('round_icon')}>
                    <FontAwesomeIcon className={cx('icon_video')} icon={faHeart} />
                </div>
                <span className={cx('value')}>{data.like}</span>
                <div className={cx('round_icon')}>
                    <FontAwesomeIcon className={cx('icon_video')} icon={faMessage} />
                </div>
                <span className={cx('value')}>{data.share}</span>
                <div className={cx('round_icon')}>
                    <FontAwesomeIcon className={cx('icon_video')} icon={faShare} />
                </div>
                <span className={cx('value')}>{data.cmt}</span>
            </div>
        </div>
    );
};

const Video = ({ data }) => {
    return (
        <div className={cx('wrapper_video')}>
            <VideoInfo data={data} />
            <VideoContent data={data} />
        </div>
    );
};

export default Video;
