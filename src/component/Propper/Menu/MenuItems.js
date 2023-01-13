import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import Button from '~/component/Button';
const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const classname = cx('menu_item', {
        separate: data.separate,
    });
    return (
        <Button className={classname} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
