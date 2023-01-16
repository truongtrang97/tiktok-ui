import classNames from 'classnames/bind';
import Styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);
function AcountItem() {
    return (
        <div className={cx('acountItem')}>
            <Image
                className={cx('user_img')}
                src="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/07/Tai-Bo-Hinh-Anh-Avatar-De-Thuong-Het-Cho-Noi.jpg"
                alt=""
            />
            <div className={cx('item-info')}>
                <span>
                    <strong className={cx('fullname')}>Truc Han</strong>
                    <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                </span>
                <p className={cx('nickname')}>hanhan</p>
            </div>
        </div>
    );
}
AcountItem.propTypes = {};

export default AcountItem;
