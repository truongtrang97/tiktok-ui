import Home from 'src/pages/Home/Home';
import Following from 'src/pages/Following';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import { HeaderOnly } from 'src/layout';
import Config from 'src/config/';
import Live from 'src/pages/Live';

const publicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.live, component: Live },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.upload, component: Upload, layout: null },
    { path: Config.routes.search, component: Search, layout: HeaderOnly },
];
const privalRoutes = [];
export { publicRoutes, privalRoutes };
