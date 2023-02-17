import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from 'src/component/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/07/Tai-Bo-Hinh-Anh-Avatar-De-Thuong-Het-Cho-Noi.jpg"
                    alt=""
                />
                <Button className={cx('follow_btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('item_info')}>
                <span>
                    <strong className={cx('full_name')}>Truc Han</strong>
                    <FontAwesomeIcon className={cx('check_icon')} icon={faCheckCircle} />
                </span>
                <p className={cx('nick_name')}>hanhan</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('name')}>8.2M</strong>
                <span className={cx('value')}>Follower</span>
                <strong className={cx('name')}>8.2M</strong>
                <span className={cx('value')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
