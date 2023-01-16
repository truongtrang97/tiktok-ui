import classNames from 'classnames/bind';
import Styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AcountItem from './Acount_Item';
const cx = classNames.bind(Styles);
function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AcountItem />
            <AcountItem />
            <AcountItem />
            <AcountItem />
            <AcountItem />
            <p className={cx('btn_info')}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
