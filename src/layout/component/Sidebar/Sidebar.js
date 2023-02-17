import classNames from 'classnames/bind';
import config from 'src/config';
import Menu from './Menu';
import { MenuItems } from './Menu';
import SuggestedAccounts from 'src/component/SuggestedAccounts';
import styles from './sidebar.module.scss';
import {
    IconForYou,
    IconFollowing,
    IconLive,
    ActiveIconForYou,
    ActiveIconFollowing,
    ActiveIconLive,
} from 'src/component/Icon';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>
                <Menu>
                    <MenuItems
                        title="For You"
                        icon={<IconForYou />}
                        activeIcon={<ActiveIconForYou />}
                        to={config.routes.home}
                    />
                    <MenuItems
                        title="Following"
                        icon={<IconFollowing />}
                        activeIcon={<ActiveIconFollowing />}
                        to={config.routes.following}
                    />
                    <MenuItems
                        title="LIVE"
                        icon={<IconLive />}
                        activeIcon={<ActiveIconLive />}
                        to={config.routes.live}
                    />
                </Menu>
            </h2>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
