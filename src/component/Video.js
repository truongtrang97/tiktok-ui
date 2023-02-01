import React from 'react';
import Button from './Button';
import '~/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const VideoInfo = () => {
    return (
        <div>
            <div className="flex">
                <img
                    className="w-[50px] h-[50px] rounded-full"
                    src="https://demoda.vn/wp-content/uploads/2022/04/anh-hoat-hinh-buon.jpg"
                    alt="avt"
                />
            </div>
            <div>
                <div className="ml-4">
                    <div>
                        <a href="#" className="text-xl font-bold hover:underline">
                            anh đang code
                        </a>
                        <a href="#">kênh lập trình</a>
                    </div>
                    <div>hãy ghé thăm anh đang code</div>
                    <FontAwesomeIcon icon={faMusic} />
                </div>
                <Button outline>Follow</Button>
            </div>
        </div>
    );
};

const VideoContent = () => {
    return <div></div>;
};

const Video = () => {
    return (
        <div>
            <VideoInfo />
            <VideoContent />
        </div>
    );
};

export default Video;
