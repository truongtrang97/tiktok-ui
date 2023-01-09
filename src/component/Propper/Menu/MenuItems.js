import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import Button from '~/component/Button';
const cx = classNames.bind(styles);
function MenuItems({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
