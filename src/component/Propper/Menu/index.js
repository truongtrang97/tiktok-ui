import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import {Wrapper as PopperWrapper} from '~/component/Propper';
import MenuItems from './MenuItems.js';
import HeaderList from './Header';

const cx = classNames.bind(styles);
const fndefault = () => {};
function Menu({ children, items = [], onChange = fndefault }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            // visible
            delay={[0, 700]}
            placement="bottom-end"
            offset={[16, 8]}
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu_propper')}>
                        {history.length > 1 && (
                            <HeaderList
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            // đoạn ni tối ưu bằng useCallback (tách hàm ra)
        >
            {children}
        </Tippy>
    );
}

export default Menu;
