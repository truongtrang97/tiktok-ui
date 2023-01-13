import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/component/layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: null },
    { path: '/Search', component: Search, layout: HeaderOnly },
];
const privalRoutes = [];
export { publicRoutes, privalRoutes };
