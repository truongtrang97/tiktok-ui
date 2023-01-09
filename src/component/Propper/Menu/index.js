import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PropperWrapper } from '~/component/Propper';
import MenuItems from './MenuItems.js';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    const a = renderItem();
    console.log(a);
    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_icon')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>{renderItem()}</PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
