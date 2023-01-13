import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                </p>
                <span className={cx('usename')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
export default AccountItem
