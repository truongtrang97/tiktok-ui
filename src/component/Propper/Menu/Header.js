import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function HeaderList({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back_btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header_title')}>{title}</h4>
        </header>
    );
}
HeaderList.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderList;
