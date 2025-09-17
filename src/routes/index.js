import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';
import Search from '~/pages/Search';
import configroutes from '~/config/routes';

const pullicRoutes = [
    { path: configroutes.Home, component: Home },
    { path: configroutes.Following, component: Following },
    { path: configroutes.Profile, component: Profile },
    { path: configroutes.Upload, component: Upload, layout: HeaderOnly },
    { path: configroutes.Search, component: Search, layout: null },
];
const privteRoutes = [];
export { pullicRoutes, privteRoutes };
