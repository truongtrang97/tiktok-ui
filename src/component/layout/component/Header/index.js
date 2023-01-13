import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudArrowDown,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMusic,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/component/Button';
import Menu from '~/component/Propper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStudiovinari } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon } from '~/component/icon';
import Image from '~/component/image';
import Search from '~/component/Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
// đoạn ni sau sẽ dùng usememo để tối ưu
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faStudiovinari} />,
        title: 'LIVE Studio',
        to: '/studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const handleMenuChange = (menuChange) => {
        console.log(menuChange);
    };
    const current_User = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Gồm 3 phần */}
                {/* Phần 1: logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                {/* Phần 2: search */}
                <Search />

                {/* Phần 3: Các button actions */}
                <div className={cx('action')}>
                    {current_User ? (
                        <>
                            <Tippy
                                content="Upload video"
                                placement="bottom"
                                // trigger="click">
                                delay={[2, 200]}
                            >
                                <button className={cx('action_btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowDown} />
                                </button>
                            </Tippy>

                            <Tippy
                                content="Message"
                                placement="bottom"
                                // trigger="click">
                                delay={[2, 200]}
                            >
                                <button className={cx('action_btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Up load</Button>
                            <Button
                                // clasname={cx('custom_color')}
                                primary
                                // outline
                                // small
                                // large
                                // disable
                                // rounded-*-*
                                // lefticon={<FontAwesomeIcon icon={faCircleXmark} />}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    {current_User ? (
                        <>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user_avartar')}
                                    src="https://i.pinimg.com/736x/d2/80/11/d280119c67e4a51b8c7a23296c64b074.jpg"
                                    alt="Truong Trang"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more_btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
