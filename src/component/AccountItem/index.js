import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/736x/d2/80/11/d280119c67e4a51b8c7a23296c64b074.jpg"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Trang Truong</span>
                    <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                </p>
                <span className={cx('usename')}>toto.kaka</span>
            </div>
        </div>
    );
}

export default AccountItem;
